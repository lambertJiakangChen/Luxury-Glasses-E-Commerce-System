CREATE TABLE Address (
	id INT NOT NULL,
	street VARCHAR(100) NOT NULL,
	province VARCHAR(20) NOT NULL,
	country VARCHAR(20) NOT NULL,
	postalcode VARCHAR(20) NOT NULL,
	phone VARCHAR(20),
	PRIMARY KEY(id)
);

INSERT INTO Address (id, street, province, country, postalcode, phone) 
VALUES (1, '567 Yonge St', 'ON', 'Canada', 'K1E 6T5' ,'647-123-4567');


CREATE TABLE Account (
	id int not null,
	username varchar(20) not null,
	fname varchar(20) not null,
	lname varchar(20) not null,
	email varchar(50) not null,
	password varchar(20) not null,
	accounttype varchar(20) not null,
	address int,
	primary key(id), 
	FOREIGN KEY (address) REFERENCES Address (id)
	);
	
INSERT INTO Account (id, username, fname, lname, email, password, accountType, address)
VALUES (1, 'justinB31', 'justin', 'bieber', 'justin1@gmail.com', 'Qwerty12', 'regular', null)