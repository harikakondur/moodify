create table if not exists users(
    id serial primary key,
    spotifyuser varchar(50) not null,
    password char(60) not null
);

create table if not exists playlists(
    playlist_id serial primary key,
    users int references users(id)
);

create table if not exists playlist_mood(
    playlist_id int references playlists(playlist_id),
    mood1 int not null,
    mood2 int not null,
    mood3 int not null,
    mood4 int not null,
    mood5 int not null
);



