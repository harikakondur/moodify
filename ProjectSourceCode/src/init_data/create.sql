-- random database, we can change it later
drop table if exists test;

create table test(
    username SERIAL primary key,
    pw varchar(30)
);