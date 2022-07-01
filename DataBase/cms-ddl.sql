drop table ContentSystem;
create database ContentSystem;

use database ContentSystem;

create table User(
    user_id integer primary key not null auto_increment,
    email varchar(50) not null unique,
    password varchar(255) not null,
);


create table Post(
    post_id integer primary key not null auto_increment,
    title varchar(50),
    header varchar(255) not null,
    body text not null,
    post_date date not null,
    expiry_date date default null,
    user_id integer not null,
    constraint FOREIGN KEY (user_id) REFERENCES users (user_id)
);


create table Category(
    category_id integer primary key not null auto_increment,
    category_name varchar(45) not null
);

create table PostCategory(
    post_id integer not null,
    category_id integer not null,
    primary key (post_id, category_id),
    constraint FOREIGN KEY (post_id) REFERENCES Post (post_id),
    constraint FOREIGN KEY (category_id) REFERENCES Category (category_id)
);

create table Image(
    image_id integer primary key not null auto_increment,
    image_path text not null,
    post_id integer not null,
    constraint FOREIGN KEY (post_id) REFERENCES Post (post_id)
)