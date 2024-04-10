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

create table if not exists moods(
    mood_id serial primary key,
    mood_name varchar(50) not null
);

create table if not exists track(
    track_id serial primary key,
    playlist_id int references playlists(playlist_id),
    user_id int references users(id),
    mood_id int references moods(mood_id)

);

create table if not exists genre(
    genre_id serial primary key,
    genre_name varchar(50) not null
);

create table if not exists spotigenres(
    spot_id int references genre(genre_id),
    sopt_name varchat(50) references genre(genre_id)
);





