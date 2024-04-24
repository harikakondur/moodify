create table if not exists users(
    id serial primary key,
    spotifyuser varchar(50) unique,
    password varchar(60) not null,
    profile_pic varchar(150),
    followers int
);

create table if not exists playlists(
    playlist_id varchar(50) primary key,
    playlist_owner varchar(50) references users(spotifyuser),
    playlist_name varchar(50),
    playlist_img varchar(250),
    mood_name varchar(50),
    mood_percent int,
    valence float,
    energy float,
    danceability float,
    track_count int,
    genre1 varchar(30),
    genre2 varchar(30),
    genre3 varchar(30)
);

create table if not exists dummy_playlists(
    playlist_id varchar(50) primary key,
    playlist_owner varchar(50),
    playlist_name varchar(50),
    playlist_img varchar(250),
    mood_name varchar(50)
);

-- create table if not exists playlist_mood(
--     playlist_id int references playlists(playlist_id),
--     mood1 int not null,
--     mood2 int not null,
--     mood3 int not null,
--     mood4 int not null,
--     mood5 int not null
-- );

create table if not exists moods(
    mood_id serial primary key,
    mood_name varchar(50) not null
);

create table if not exists track(
    track_id serial primary key,
    playlist_id varchar(50) references playlists(playlist_id),
    user_id int references users(id),
    valence float,
    energy float,
    dancebility float
);

create table if not exists genre(
    genre_id serial primary key,
    genre_name varchar(50) not null
);

-- create table if not exists mood_to_genre(
--     genre_id references moods(mood_id),
--     genre_name references moods(genre_name)
-- );





