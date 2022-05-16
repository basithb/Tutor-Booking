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
customer_status VARCHAR(10) NOT NULL,
FOREIGN KEY (user_id) REFERENCES tbl_login (user_id)
);

-- Creates tbl_tutor

CREATE TABLE tbl_tutor(
tutor_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
user_id uuid NOT NULL,
tutor_firstName VARCHAR(25) NOT NULL,
tutor_lastName VARCHAR(25) NOT NULL,
tutor_stateName VARCHAR(25) NOT NULL,
tutor_cityName VARCHAR(25) NOT NULL,
tutor_status VARCHAR(10) NOT NULL,
FOREIGN KEY (user_id) REFERENCES tbl_login (user_id)
);

-- Creates tbl_category

CREATE TABLE tbl_category(
    category_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL,
    category_status VARCHAR(10) NOT NULL
);


-- Creates tbl_subject

CREATE TABLE tbl_subject(
    subject_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id integer NOT NULL,
    subject_name VARCHAR(30) NOT NULL,
    subject_status VARCHAR(10) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES tbl_category (category_id)
);

-- Creates tbl_slot

CREATE TABLE tbl_slot(
    slot_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slot_date date NOT NULL,
    slot_time time NOT NULL,
    slot_status VARCHAR(10) NOT NULL
);


-- Creates tbl_session_master

CREATE TABLE tbl_session_master(
    session_master_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tutor_id integer NOT NULL,
    session_price integer NOT NULL,
    session_status VARCHAR(10) NOT NULL,
    FOREIGN KEY (tutor_id) REFERENCES tbl_tutor (tutor_id)
);

-- Creates tbl_session_child

CREATE TABLE tbl_session_child(
    session_child_id integer  NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    session_master_id integer NOT NULL,
    subject_id integer NOT NULL,
    category_id integer NOT NULL,
    slot_id integer NOT NULL,
    FOREIGN KEY (session_master_id) REFERENCES tbl_session_master (session_master_id),
    FOREIGN KEY (subject_id) REFERENCES tbl_subject (subject_id),
    FOREIGN KEY (category_id) REFERENCES tbl_category (category_id),
    FOREIGN KEY (slot_id) REFERENCES tbl_slot (slot_id)
);

-- Creates tbl_booking

CREATE TABLE tbl_booking (
    booking_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id integer NOT NULL,
    session_master_id integer NOT NULL,
    booking_status VARCHAR(10) NOT NULL,
    booking_date date NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES tbl_customer (customer_id)
);


-- Creates tbl_card

CREATE TABLE tbl_card (
    card_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     customer_id integer NOT NULL,
    card_holder VARCHAR(50) NOT NULL,
    card_number VARCHAR(20) NOT NULL,
    card_expiry date NOT NULL,
    card_status VARCHAR(10) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES tbl_customer (customer_id)
);



-- Creates tbl_payment

CREATE TABLE tbl_payment (
    payment_id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    booking_id integer NOT NULL,
    card_id integer NOT NULL,
    payment_status VARCHAR(10) NOT NULL,
    payment_date date NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES tbl_booking(booking_id),
    FOREIGN KEY (card_id) REFERENCES tbl_card (card_id)
);


