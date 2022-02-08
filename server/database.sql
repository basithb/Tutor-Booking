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