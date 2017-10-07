### Schema
DROP DATABASE IF EXISTS vechicles_db;
CREATE DATABASE vechicles_db;
USE vechicles_db;

CREATE TABLE clients
(
	id int NOT NULL AUTO_INCREMENT,
	client_name varchar(255) NOT NULL,
	business_name varchar(255),
	address varchar(255),
	email varchar(255) ,
	PRIMARY KEY (id)
);

CREATE TABLE vehicles
(
	id int NOT NULL AUTO_INCREMENT,
	day_finished DATE NOT NULL,
	vin varchar(100) NOT NULL,
	make varchar(100) NOT NULL,
	model varchar(100) NOT NULL,
	model_year YEAR(4) NOT NULL,
	client_name varchar(200) NOT NULL,
	client_id int NOT NULL,
	cost DECIMAL(7,2),
	paid ENUM('paid', 'not paid'),
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);
