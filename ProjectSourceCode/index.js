
//functions
//const insertPlaylists = require('./src/resources/js/script.js');

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

app.use(express.static(__dirname + '/public'));
//app.use('/resources', express.static(path.join(__dirname, 'resources')));

const tokens = {
  access:undefined,
  refresh:undefined,
  username: undefined
}
//functions -----------------------------
async function insertPlaylists(playlistJson,username){
  console.log("Inside insertPlaylists()")
    var playlistCount= playlistJson.limit

    for (i=0;i<playlistCount;i++){
        var id=playlistJson.items[i].id
        var name=playlistJson.items[i].name
        var img=playlistJson.items[i].images[0].url
        var mood
        let insert = `
    INSERT INTO playlists(playlist_id, playlist_owner, playlist_name, playlist_img)
    SELECT '${id}', '${username}', '${name}', '${img}'
    WHERE NOT EXISTS (
        SELECT 1 FROM playlists WHERE playlist_id='${id}'
    )
`;
        //let insert=`insert into playlists(playlist_id,playlist_owner,playlist_name,playlist_img) values('${id}', '${username}', '${name}', '${img}') where not exists (select playlist_id from playlists where playlistid='${id}')`
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
  res.render('pages/home');
});


//POST login api
app.post('/login', async(req,res)=>{
    try {
      console.log("in /login")
        const username = req.body.username;
        const password = req.body.password;
        const query= `select * from users where spotifyuser='${username}';`;
        let user= await db.any(query);
        //console.log(user);
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
  console.log(spotifyUsername, " in post")
  let query = 'insert into users (spotifyuser,password) values ($1,$2) returning *';
  let checkExists = `select * from users where spotifyuser=$1`;

  // Check if user already exists
  db.oneOrNone(checkExists, [spotifyUsername])
    .then(user => {
      if (user) {
        // User already exists, redirect to login
        res.render('pages/login',{message:"Account already exists, please login"});
      } else {
        // User doesn't exist, proceed with registration
        db.one(query, [spotifyUsername, hash])
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
  console.log("/playlisy home page username: ",tokens.username)
  const  usern  = tokens.username
  
  const q = await db.query(`SELECT * FROM playlists WHERE playlist_owner='${usern}'`)
  .then(result => {
    console.log('success?')
    console.log("ROWS: ",result)
    res.render('pages/home', { playlists: result });
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
      console.log("RESULTS",results.data)
      console.log("get_playlists usernmae",tokens.username)
      insertPlaylists(results.data,tokens.username);
      res.redirect('/playlistsHomePage');
    })
    .catch(error => {
      console.log("ERRORRRR")
      console.log(error);
    });
});


app.get('/logout',(req,res)=>{
  res.render('pages/login',{message:"Logged out Successfully."});
});
module.exports = app.listen(3000);
// console.log('Listening on 3000');
// app.listen(3000);








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
          console.log("updated username token: ",tokens.username)
          res.render('pages/register',{spotifyUsername:spotifyUsername})
          console.log(body.id);
        });

        // we can also pass the token to the browser to make requests from there
        // res.redirect('/home')
        //   console.log(querystring.stringify({
        //     access_token: access_token,
        //     refresh_token: refresh_token
        //   }))
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

        // we can also pass the token to the browser to make requests from there
        // res.redirect('/home')
        //   console.log(querystring.stringify({
        //     access_token: access_token,
        //     refresh_token: refresh_token
        //   }))
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