drop database if exists ContentSystem;
create database if not exists ContentSystem;

use database ContentSystem;

-- Tables
create table Account(
    account_id serial primary key,
    email varchar(50) not null unique,
    password varchar(255) not null,
    is_admin boolean not null default false
);

create table Post(
    post_id serial primary key,
    title varchar(50),
    header varchar(255) not null,
    body text not null,
    post_date date not null,
    expiry_date date default null,
    is_approved boolean not null default false,
    account_id integer not null,
    constraint fk_account FOREIGN KEY (account_id) REFERENCES Account (account_id)
);


create table Category(
    category_id serial primary key,
    category_name varchar(45) not null
);

create table PostCategory(
    post_id integer not null,
    category_id integer not null,
    primary key (post_id, category_id),
    constraint fk_post FOREIGN KEY (post_id) REFERENCES Post (post_id),
    constraint fk_category FOREIGN KEY (category_id) REFERENCES Category (category_id)
);

create table Image(
    image_id serial primary key,
    image_path text not null,
    post_id integer not null,
    constraint fk_post_image FOREIGN KEY (post_id) REFERENCES Post (post_id)
);