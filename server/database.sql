-- Create Database tutorBooking

CREATE DATABASE tutorBooking;

-- Create tbl_login

CREATE TABLE tbl_login(
User_id uuid PRIMARY KEY DEFAULT
uuid_generate_v4(), 
User_name VARCHAR(255) NOT NULL,
User_email VARCHAR(255) NOT NULL,
User_password VARCHAR(255) NOT NULL,
User_type VARCHAR(255) NOT NULL,
User_status VARCHAR(255) NOT NULL
); 

-- Insert values into tbl_login

INSERT INTO tbl_login (User_name, User_email, User_password, User_type, User_status) VALUES ('Admin', 'admin@tutor.com', 'admin', 'admin', 'active');


-- Create tbl_customer


CREATE TABLE tbl_customer(
customer_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
user_id uuid NOT NULL,
customer_firstName VARCHAR(25) NOT NULL,
customer_lastName VARCHAR(25) NOT NULL,
customer_stateName VARCHAR(25) NOT NULL,
customer_cityName VARCHAR(25) NOT NULL,
FOREIGN KEY (user_id) REFERENCES tbl_login (user_id)
);



