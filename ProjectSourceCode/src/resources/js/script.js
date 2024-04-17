function insertPlaylists(playlistJson,username){
    var playlistCount= playlistJson.limit

    for (i=0;i<playlistCount;i++){
        var id=playlistJson.items[i].id
        var name=playlistJson.items[i].name
        var img=playlistJson.items[i].images[0].url
        var mood
        let insert=`insert into playlists(playlist_id,playlist_owner,playlist_name,playlist_img) values('${id}', '${username}', '${name}', '${img}')`
        console.log(insert)
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

module.exports = insertPlaylists;