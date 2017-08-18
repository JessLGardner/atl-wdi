DROP TABLE if EXISTS apartments;
DROP TABLE if EXISTS offices;
DROP TABLE if EXISTS storefronts;

CREATE TABLE apartments(
    id SERIAL PRIMARY KEY,
    apartment_num INTEGER,
    bedrooms INTEGER,
    bathrooms NUMERIC(1),
    address TEXT NOT NULL,
    tenant VARCHAR(255),
    occupied BOOLEAN,
    sq_ft NUMERIC,
    price MONEY
);

CREATE TABLE offices (
    id SERIAL PRIMARY KEY,
    office_num NUMERIC,
    floors INTEGER,
    sq_ft NUMERIC,
    cubicles INTEGER,
    bathrooms INTEGER,
    address TEXT NOT NULL,
    name VARCHAR(255),
    occupied BOOLEAN,
    price MONEY
);

CREATE TABLE storefronts (
    id SERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    occupied BOOLEAN,
    price MONEY,
    kitchen BOOLEAN,
    sq_ft NUMERIC,
    owner VARCHAR(255),
    outdoor_seat1.5 BOOLEAN DEFAULT FALSE
);