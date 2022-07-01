DROP DATABASE IF EXISTS CarDealership;
CREATE DATABASE CarDealership;

USE CarDealership;

DROP TABLE IF EXISTS Admin;


DROP TABLE IF EXISTS Vehicle;
CREATE TABLE Vehicle(
    vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
    vehicle_model_name VARCHAR(255) NOT NULL,
    'year' DATE NOT NULL,
    make ENUM('Make') NOT NULL,
    model ENUM('Model')NOT NULL
	
);

CREATE TABLE User(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    'user_name' VARCHAR(255) NOT NULL,
    account_type ENUM('Disabled','Sales','Admin') NOT NULL,
    'password' VARCHAR(255) NOT NULL,
   
);

DROP TABLE IF EXISTS Order;
CREATE TABLE Order(
    id INT PRIMARY KEY AUTO_INCREMENT,
  
);