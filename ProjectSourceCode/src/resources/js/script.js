const { default: axios } = require("axios");

// document.getElementById('viewMoodButton').addEventListener('click', function() {
//   fetch('/view_mood')
//       .then(response => response.text())
//       .then(data => {
//           document.getElementById('mood').textContent = data;
//       })
//       .catch((error) => {
//           console.error('Error:', error);
//       });
// });

// function insertPlaylists(playlistJson,username){
//   console.log("Inside insertPlaylists()")
//     var playlistCount= playlistJson.limit

//     for (i=0;i<playlistCount;i++){
//         var id=playlistJson.items[i].id
//         var name=playlistJson.items[i].name
//         var img=playlistJson.items[i].images[0].url
//         var mood
//         let insert=`insert into playlists(playlist_id,playlist_owner,playlist_name,playlist_img) values('${id}', '${username}', '${name}', '${img}')`
//         console.log("INSERTING ",insert)
//         // execute the insert query here
//         db.query(insert, (err, res) => {
//             if (err) {
//               console.log(err.stack)
//             } else {
//               console.log(res.rows[0])
//             }
//           })
//     }
// }

//module.exports = insertPlaylists;


// function fetchGenres(playlistJson){
//   var allGenres = {} //this will collect all the genres (genre:count)
//   var songs = playlistJson.items.length

//   //parsing through each track
//   for (let i = 0; i < songs; i++){
//     var artistSongUrl = playlistJson.items[i].track.album.artists[0].href //artist endpoint
//     axios.get(artistSongUrl, {
//       headers: {
//         'Authorization': tokens.access
//       }
//     })
//     .then(result => {
//       var artistGenres = result.genres //artist genres

//       // Add genres to allGenres
//       artistGenres.forEach(genre => {
//         if (allGenres[genre]) { 
//           allGenres[genre]++
//         } else {
//           allGenres[genre] = 1
//         }  
//       });

//     }).catch(err => {
//       console.log("fetching artist genre error: ",err)
//     });
//   }
//   console.log("allgenres",allGenres)
// }