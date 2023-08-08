--créer la base de données
CREATE DATABASE gestion_hotel;

CREATE TABLE receptionist (
    id_employee SERIAL PRIMARY KEY,
    first_name VARCHAR(200),
    last_name VARCHAR(200),
    Password VARCHAR(50),
    email VARCHAR(100),
    work_contact VARCHAR (200),
    id_hotel INT,
    FOREIGN KEY (id_hotel) REFERENCES hotel (id_hotel)
);

CREATE TABLE client (
    id_client SERIAL PRIMARY KEY,
    name VARCHAR(200),
    last_name VARCHAR(200),
    principal_contact VARCHAR(50),
    address VARCHAR(200),
    emergency_number VARCHAR(50),
    gender CHAR(1),
    CIN VARCHAR (200),
    Email VARCHAR(100),
    Password VARCHAR(50),
    id_employee INT,
    FOREIGN KEY (id_employee) REFERENCES receptionist (id_employee)
);

CREATE TABLE feedback(
        id_feedback SERIAL PRIMARY KEY,
        comment text,
        rating int,
        id_client INT,
        FOREIGN KEY (id_client) REFERENCES client (id_client) 
);

CREATE TABLE status_client (
    id_status_client SERIAL PRIMARY KEY,
    status_arrived INT,
    status_missing INT,
    in_fidelity BOOL,
    in_blacklist BOOL,
    id_client INT,
    FOREIGN KEY (id_client) REFERENCES client (id_client)
);

CREATE TABLE service (
    id_service SERIAL PRIMARY KEY,
    service_name VARCHAR(200),
    description VARCHAR(200),
    price FLOAT,
    reduction FLOAT
);

CREATE TABLE buy (
    id_buy SERIAL PRIMARY KEY,
    id_client INT,
    id_service INT,
    FOREIGN KEY (id_client) REFERENCES client (id_client),
    FOREIGN KEY (id_service) REFERENCES service (id_service)
);

CREATE TABLE reservation (
    id_reservation SERIAL PRIMARY KEY,
    date_arrived DATE,
    leaving_date DATE,
    number_of_person INT,
    is_cancelled BOOL,
    id_client INT,
    FOREIGN KEY (id_client) REFERENCES client (id_client)
);

CREATE TABLE promotion (
    id_promotion SERIAL PRIMARY KEY ,
    name VARCHAR(100),
    "begin" DATE,
    "end" DATE,
    percent INT
);

CREATE TABLE room_features (
    id_features SERIAL PRIMARY KEY,
    sea_view BOOL,
    VIP_category BOOL,
    hot_water BOOL,
    wifi_available BOOL,
    room_service BOOL,
    mini_bar BOOL,
    flat_screen BOOL
);

CREATE TABLE province_available (
    id_province SERIAL PRIMARY KEY,
    province_name VARCHAR(100),
    code_province INT
);

CREATE TABLE hotel (
    id_hotel SERIAL PRIMARY KEY,
    hotel_name VARCHAR(200),
    address VARCHAR(200),
    id_province INT,
    FOREIGN KEY (id_province) REFERENCES province_available (id_province)
);

CREATE TABLE room (
    id_room SERIAL PRIMARY KEY,
    number VARCHAR(100),
    room_type VARCHAR(200),
    capacity_room INT,
    id_promotion INT,
    id_reservation INT,
    id_features INT,
    id_hotel INT,
    FOREIGN KEY (id_promotion) REFERENCES promotion (id_promotion),
    FOREIGN KEY (id_reservation) REFERENCES reservation (id_reservation),
    FOREIGN KEY (id_features) REFERENCES room_features (id_features),
    FOREIGN KEY (id_hotel) REFERENCES hotel (id_hotel)
);

CREATE TABLE season (
    id_season SERIAL PRIMARY KEY,
    items VARCHAR(50),
    start_date DATE,
    end_date DATE
);

CREATE TABLE price (
    id_price_by_season SERIAL PRIMARY KEY,
    cost_per_night FLOAT(50), 
    id_room INT,
    id_season INT,
    FOREIGN KEY (id_room) REFERENCES room (id_room),
    FOREIGN KEY (id_season) REFERENCES season (id_season)
);

CREATE TABLE payment (
    id_payment SERIAL PRIMARY KEY,
    payment_date DATE,
    amount_paid FLOAT,
    number_night INT,
    room_occupied INT,
    deadline_payment VARCHAR(200),
    lending_status BOOL,
    total_amount_status BOOL,
    id_client INT,
    id_employee INT,
    FOREIGN KEY (id_client) REFERENCES client (id_client),
    FOREIGN KEY (id_employee) REFERENCES receptionist (id_employee)
);

CREATE TABLE payment_method (
    id_payment_method SERIAL PRIMARY KEY,
    mobile_money BOOL,
    credit_card BOOL,
    cash BOOL
);

CREATE TABLE choose_payment (
    id_choose_payment SERIAL PRIMARY KEY,
    id_payment INT,
    id_payment_method INT,
    FOREIGN KEY (id_payment) REFERENCES payment (id_payment),
    FOREIGN KEY (id_payment_method) REFERENCES payment_method (id_payment_method)
);


--delete isCancel table
DROP TABLE isCancel;

--add isCancel on reservation table
ALTER TABLE reservation ADD COLUMN is_cancelled BOOLEAN ;	

--change the CIN's type on varchar
ALTER TABLE client ALTER COLUMN CIN TYPE VARCHAR(200);

--change work_contact's type on vachar
ALTER TABLE receptionist ALTER COLUMN work_contact TYPE VARCHAR(200);

-- Add id_hotel column and foreign key constraint to the receptionist table
ALTER TABLE receptionist
ADD COLUMN id_hotel INT,
ADD CONSTRAINT fk_receptionist_hotel
FOREIGN KEY (id_hotel) REFERENCES hotel (id_hotel);

-- changement de id en serial primary key
