CREATE DATABASE tutorBooking;

CREATE TABLE tbl_login(
User_id uuid PRIMARY KEY DEFAULT
uuid_generate_v4(), 
User_name VARCHAR(255) NOT NULL,
User_email VARCHAR(255) NOT NULL,
User_password VARCHAR(255) NOT NULL,
User_type VARCHAR(255) NOT NULL,
User_status VARCHAR(255) NOT NULL
); 