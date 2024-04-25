
// ----------------------------------   DEPENDENCIES  ----------------------------------------------
const pgp = require('pg-promise')() // To connect to the Postgres DB from the node server
var request = require('request');
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');
const bcrypt = require('bcrypt'); //  To hash passwords

const express = require('express'); // To build an application server or API
const app = express(); //express object
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // To set the session object. To store or access session data, use the `req.session`, which is (generally) serialized as JSON by the store.
const axios = require('axios'); // To make HTTP requests from our server. We'll learn more about it in Part C.

const { genreMoods } = require('./G2M');

// -------------------------------------  DB CONFIG AND CONNECT   ---------------------------------------
const dbConfig = {
  host: 'db',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
};




const prodDbConfig = {
  host: process.env.host,
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
};


const db = pgp(dbConfig);  //dbconfig
// db test
db.connect()
  .then(obj => {
    // Can check the server version here (pg-promise v10.1.0+):
    console.log('Database connection successful');
    obj.done(); // success, release the connection;
  })
  .catch(error => {
    console.log('ERROR', error.message || error);
  });
//------------------------- Handlebars Config---------------------------------------------------
// create `ExpressHandlebars` instance and configure the layouts and partials dir.
const hbs = handlebars.create({
  extname: 'hbs',
  layoutsDir: __dirname + '/src/views/layouts',
  partialsDir: __dirname + '/src/views/partials',
});

//-------------------------- App Settings ---------------------------------
// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'src','views'));
app.use(bodyParser.json()); // specify the usage of JSON for parsing request body.

// initialize session variables
app.use(
  session({
    secret: process.env.CLIENT_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.use(express.static('src/resources'));
//app.use('/resources', express.static(path.join(__dirname, 'resources')));


const tokens = {
  access:undefined,
  refresh:undefined,
  username: undefined
}
//-------------------------------------FUNCTIONS -----------------------------
async function insertPlaylists(playlistJson,username){
  console.log("Inside insertPlaylists()")
    var playlistCount= playlistJson.limit

    for (i=0;i<playlistCount;i++){
        var id=playlistJson.items[i].id
        var name=playlistJson.items[i].name
        var img=playlistJson.items[i].images[0].url
        var trackCount=playlistJson.items[i].tracks.total
        let insert = `
        INSERT INTO playlists(playlist_id, playlist_owner, playlist_name, playlist_img, track_count)
        SELECT '${id}', '${username}', '${name}', '${img}', ${trackCount}
        WHERE NOT EXISTS (
            SELECT 1 FROM playlists WHERE playlist_id='${id}'
        )
    `;
        console.log("INSERTING ",insert)
        // execute the insert query here
        db.query(insert, (err, res) => {
            if (err) {
              console.log(err.stack)
            } else {
              console.log(res.rows[0])
            }
          })
    }
}

function generateMood(genreArray) {
  console.log("inside generate mood");
    const moodCount = {
        'euphoric': 0,
        'sad': 0,
        'peaceful': 0,
        'dramatic': 0,
        'romantic': 0,
        'undefined': 0
    };
    genreArray.forEach((item) => {
        for (let [mood, genres] of Object.entries(genreMoods)) {
            if (genres.includes(item.genre)) {
                moodCount[mood] += item.count; // Add the count to the mood if the genre is found in its array
            }
        }
    });
    let maxMood = '';
    let maxCount = -1;
    for (let [mood, count] of Object.entries(moodCount)) {
        if (count > maxCount) {
            maxCount = count;
            maxMood = mood;
        }
    }
    console.log(maxCount);
    console.log(genreArray.length);
    let moodPercent = (maxCount / genreArray.reduce((total, item) => total + item.count, 0)) * 100;
    return {mood: maxMood, percentage : moodPercent};
}


// -----------ROUTES---------------------

//for test purposes
app.get('/welcome', (req, res) => {
  res.json({status: 'success', message: 'Welcome!'});
});

app.get('/', (req,res)=>{
  res.redirect('/login');
});

app.get('/login', (req,res)=>{
  res.render('pages/login');
});

app.get('/register', (req,res)=>{
  res.render('pages/register');
});

app.get('/home', (req,res)=>{
  console.log("TOKEN",tokens.access)
  res.render('pages/home');
});

app.get('/', (req,res)=>{
  res.redirect('/user');
});

app.get('/user', (req,res)=>{
  res.render('pages/user');
});

app.get('/', (req,res)=>{
  res.redirect('/genres');
});

app.get('/genres', (req,res)=>{
  res.render('pages/genres');
});


//POST login api
app.post('/login', async(req,res)=>{
    try {
      console.log("in /login")
        const username = req.body.username;
        const password = req.body.password;
        const query= `select * from users where spotifyuser='${username}';`;
        let user= await db.any(query);
        if(user.length!=0){
            // check if password from request matches with password in DB
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if(match){
              req.session.user = {client_id: process.env.CLIENT_ID};
                req.session.save();
                //save username
                tokens.username=username
                res.redirect('/spotify_auth_login')
                console.log
            }else{
              console.log("incorrect user/password")
              res.render('pages/login', {message: "Incorrect Username or Password."});
            }
        }else{
          res.render('pages/login', {message: "User does not exist. Please register."});
        }
    } catch(error) {
        res.render('pages/login', {message:error});
    }
});

// POST Register
app.post('/register', async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const spotifyUsername = req.body.spotifyUsername;
  const followers = req.body.followers;
  const profilePic = req.body.profilePic;
  console.log(spotifyUsername, " in post")
  console.log("followers",followers)
  let query = 'INSERT INTO users (spotifyuser, password, followers, profile_pic) VALUES ($1, $2, $3, $4) RETURNING *';
  let checkExists = `select * from users where spotifyuser=$1`;

  // Check if user already exists
  db.oneOrNone(checkExists, [spotifyUsername])
    .then(user => {
      if (user) {
        // User already exists, redirect to login
        res.render('pages/login',{message:"Account already exists, please login"});
      } else {
        // User doesn't exist, proceed with registration
        db.one(query, [spotifyUsername, hash, followers, profilePic])
          .then(user => {
            console.log("inserted user", user);
            res.redirect('/login');
          })
          .catch(error => {
            console.error('ERROR:', error);
            console.log(error);
            res.redirect('/login');
          });
      }
    })
    .catch(error => {
      console.error('ERROR:', error);
      console.log(error);
      res.redirect('/login');
    });
});

app.get('/playlistsHomePage', async (req, res) => {  
  console.log("in /playlists homepage")
  console.log("/playlist home page username: ",tokens.username)
  const  usern  = tokens.username
  
  const q = await db.query(`SELECT * FROM playlists WHERE playlist_owner='${usern}'`)
  .then(async result => {
    console.log('success?')
    //console.log("ROWS: ",result)

    const user = await db.query(`SELECT * FROM users WHERE spotifyuser='${usern}'`);
    const profile_pic = user[0].profile_pic;
    const followers = user[0].followers;

    res.render('pages/home', { playlists: result, usern, profile_pic, followers });
  }).catch(err => {
    console.log(err)
  });
});



app.get('/get_playlists', async (req,res)=>{
  console.log("in /get_playlists")
  console.log("   user:",tokens.username)
  const tokenp = "Bearer " + tokens.access;
  const playlistUrl= `https://api.spotify.com/v1/users/${tokens.username}/playlists?limit=6`
  axios.get(playlistUrl,{
    headers: {
      'Authorization': tokenp
    }})
    .then(results => {
      //console.log("RESULTS",results.data)
      console.log("get_playlists usernmae",tokens.username)
      insertPlaylists(results.data,tokens.username);
      res.redirect('/playlistsHomePage');
    })
    .catch(error => {
      console.log("ERRORRRR")
      console.log(error);
    });
});


async function fetchMetrics(playlistJson,total){
  console.log("inside fetchGenres")
  var allGenres = {} //this will collect all the genres (genre:count)
  var artists=[]
  var promises = []; // this will collect all the promises

  let totalValence = 0.0;
  let totalDanceability = 0.0;
  let totalEnergy = 0.0;

  var audioUrl='https://api.spotify.com/v1/audio-features/{id}'
  //parsing through each track
  for (let i = 0; i < total; i++){
    const trackId = playlistJson.tracks.items[i].track.id;
    console.log("TRACK ID: ",trackId)
    //var artistSongUrl = playlistJson.tracks.items[i].track.album.artists[0].href //artist endpoint
    var artistId = playlistJson.tracks.items[i].track.artists[0].id //artist endpoint
    artists.push(artistId);
    const audioResponse = `https://api.spotify.com/v1/audio-features/${trackId}`

    var promise = axios.get(audioResponse, {
      headers: {
        'Authorization': "Bearer " + tokens.access
      }
    })
    .then(audioResult => {
      totalValence += audioResult.data.valence;
      totalDanceability += audioResult.data.danceability;
      totalEnergy += audioResult.data.energy;

    }).catch(err => {
      console.log("fetching artist genre error: ",err)
    });

    promises.push(promise);
  }

  await Promise.all(promises);
  console.log("artist ids after fetching",artists)
  console.log("Artists: ", artists);
  console.log("Danceability: ", totalDanceability);
  console.log("Energy: ", totalEnergy);
  console.log("Valence: ", totalValence);
  console.log("Average Danceability: ", totalDanceability / total);
  console.log("Average Energy: ", totalEnergy / total);
  console.log("Average Valence: ", totalValence / total);
  return {
  artists: artists,
  averageDanceability: totalDanceability / total,
  averageEnergy: totalEnergy / total,
  averageValence: totalValence / total
};
}

function createGenreArray(artistsJson){
  let genreCount = {};
  console.log("JSON",artistsJson)
    artistsJson.artists.forEach(artist => {
        artist.genres.forEach(genre => {
            if (genreCount[genre]) {
                genreCount[genre]++;
            } else {
                genreCount[genre] = 1;
            }
        });
    });
    return genreCount;
}

app.get('/view_mood/:id', async (req, res) => {
  console.log("Inside /view_mood/:id route");
  var pid = req.params.id;
  const url = `https://api.spotify.com/v1/playlists/${pid}`;
  console.log(pid)

  axios.get(url, {
    headers: {'Authorization': "Bearer " + tokens.access}
  })
  .then(async playlistResult => {
    console.log("PLAYLIST: ",playlistResult.data)
    let check = `SELECT * FROM playlists WHERE playlist_name='${playlistResult.data.name}'`;

    //check if mood has already been generated
    console.log("Running db.query with check:", check);

    db.oneOrNone(check)
    .then(async dbResult => {
      console.log("db.query result:", dbResult);
       // CASE 1: playlist exists and mood had been generated already
       if(dbResult && dbResult.mood != null){
        console.log("Mood is not null");
        let genreCount = {
          [dbResult.genre1]: 1,
          [dbResult.genre2]: 1,
          [dbResult.genre3]: 1
        };
        res.render('pages/genres', {    
          playlistName: playlistResult.data.name,
          img: playlistResult.data.images[0].url,
          mood: dbResult.mood,
          genres: genreCount
        });
      }
      // CASE 2: playlist exists but mood has NOT been generated
      else{
        console.log("hi")
        var total=playlistResult.data.tracks.total
        var fetchResult = await fetchMetrics(playlistResult.data, total);
        var artistids=fetchResult.artists.slice(0,50).join(",")
        var severalArtistsUrl=`https://api.spotify.com/v1/artists?ids=${artistids}`
        axios.get(severalArtistsUrl,{
        headers: {'Authorization': "Bearer " + tokens.access}
      })
      .then(artists => {
      var allGenres=createGenreArray(artists.data);
      console.log("GENRES",allGenres)
      var genreArray = Object.keys(allGenres).map(genre => {
        return { genre: genre, count: allGenres[genre] };
      });
      var mood = generateMood(genreArray);
      mood.percentage = Math.round(mood.percentage);
      console.log(mood);
      var topGenres = genreArray.sort((a, b) => b.count - a.count).slice(0, 3);

      console.log("TOP GENRES", topGenres)
          var query = `UPDATE playlists SET genre1='${topGenres[0].genre}', genre2='${topGenres[1].genre}', genre3='${topGenres[2].genre}', mood_name = '${mood.mood}', mood_percent= '${mood.percentage}' WHERE playlist_id='${pid}'`;
          db.query(query, (error, results) => {
            if (error) {
              console.error(error);
            } else {
              console.log("Genres inserted successfully"); 
            }
          });
          res.render('pages/genres', {    
            genres: topGenres,
            playlistName: playlistResult.data.name,
            img: playlistResult.data.images[0].url,
            averageDanceability: fetchResult.averageDanceability*100,
            averageEnergy: fetchResult.averageEnergy*100,
            averageValence: fetchResult.averageValence*100,
            mood : mood
          });
        })
      }
    })
    .catch(err => {
      console.error("db.query error:", err);
    });
  })
  .catch(err=>{
    console.log("Fetching playlist error",err)
  })
});

app.get('/suggestions', (req, res) => {
  const averageValence = req.query.averageValence;
  const averageEnergy = req.query.averageEnergy;
  const averageDanceability = req.query.averageDanceability;
  const genres = req.query.genres;

  // Use the query parameters to make a request to the Spotify API
  axios.get('https://api.spotify.com/v1/recommendations', {
    params: {
      seed_genres: genres,
      target_danceability: averageDanceability,
      target_energy: averageEnergy,
      target_valence: averageValence,
    },
    headers: {
      Authorization: 'Bearer ' + tokens.access, 
    },
  })
  .then(response => {
    // Extract the songs from the Spotify API response
    const songs = response.data.tracks.map(track => ({
      name: track.name,
      artist: track.artists[0].name,
    }));

    // Send the list of songs as a JSON response
    res.json(songs);
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).send('An error occurred while fetching songs from Spotify.');
  });  
});

    
app.get('/logout',(req,res)=>{
  res.render('pages/login',{message:"Logged out Successfully."});
});
module.exports = app.listen(3000);



//--------------------------------SPOTIFY AUTHORIZATION-----------------------------------------

// SOURCE: https://github.com/spotify/web-api-examples/blob/master/authorization/authorization_code/app.js
/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/code-flow
 */



var client_id = 'cb3a7ca41185461ea68486af1ccc4108';
var client_secret = '96f9609b1ad642038dd8224665bb85cb'; // Your secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

const generateRandomString = (length) => {
  return crypto
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}

var stateKey = 'spotify_auth_state';


app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/spotify_auth', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});


app.get('/callback', function(req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        //updating tokens to use for other routes
        tokens.access = access_token;
        tokens.refresh = refresh_token;
        console.log("Updated tokens after auth:",tokens.access)
        
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          const spotifyUsername=body.id //fetch the spotify username
          tokens.username=body.id //save for later
          var followers=body.followers.total
          var profilePic=body.images[0].url
          console.log("updated username token: ",tokens.username)
          res.render('pages/register', {
            spotifyUsername: spotifyUsername,
            followers: followers,
            profilePic: profilePic
          });
          console.log(body.id);
        });

     
      } else {
        res.redirect('/#' +
          querystring.stringify({ 
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) 
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
   };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      
      //updating tokens to use for other routes
      tokens.access = access_token;
      tokens.refresh = refresh_token;
      
      res.send({
        'access_token': access_token,
        'refresh_token': refresh_token
      });
    }
  });
});

// Spotify Auth for login

app.get('/spotify_auth_login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: 'http://localhost:3000/callback_login',
      state: state
    }));
});


app.get('/callback_login', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: 'http://localhost:3000/callback_login',
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        //updating tokens to use for other routes
        tokens.access = access_token;
        tokens.refresh = refresh_token;
        console.log("updating login access token:",tokens.access)
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          const spotifyUsername=body.id //fetch the spotify username
          tokens.username=body.id //save for later
          console.log("updated username token: ",tokens.username)
          res.redirect('/get_playlists');
          //res.redirect('/get_playlists',{spotifyUsername:spotifyUsername})
          console.log(body.id);
        });
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) 
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
   };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      
      //updating tokens to use for other routes
      tokens.access = access_token;
      tokens.refresh = refresh_token;
      
      res.send({
        'access_token': access_token,
        'refresh_token': refresh_token
      });
    }
  });
});

app.get('/login', (req, res) => {
  res.render('login', { isLoggedIn: false });
});

app.get('/home', (req, res) => {
  if(req.session.user) { // Assuming session middleware is used for login state
    res.render('home', { isLoggedIn: true });
  } else {
    res.redirect('/login');
  }
});

