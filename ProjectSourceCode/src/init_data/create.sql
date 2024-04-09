drop table if exists users;
create table users(
    id serial primary key,
    spotifyuser varchar(50) not null,
    password char(60) not null
);


