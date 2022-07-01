drop table ContentSystem;
create database ContentSystem;

user database ContentSystem;

create table User(
    user_id int primary key not null auto_increment,

);

create table Post(
    post_id int primary key not null auto_increment,
);

create table Category(
    category_id int primary key not null auto_increment,
);
