--======== APARTMENT ==========
INSERT INTO apartments
(apartment_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price)
VALUES (27, 2, 1.5, '53737 Janis Expressway West Marley, AR 93679', 'Belle Denesik', true, 1200, 150000);

INSERT INTO apartments
(apartment_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) 
VALUES (14, 4, 3, '4585 Arthur Tunnel East Jan, AL 11821', 'Brett Bednar', false, 2300, 245000);

INSERT INTO apartments
(apartment_num, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price) 
VALUES (4, 1, 1, '335 Altenwerth Mountain Lake Kaylah, WY 79705-4437', 'Melyna Kling', true, 800, 105000);



--======== OFFICE ==========
INSERT INTO offices
(office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price)
VALUES (2, 2, 2200, 8, 4, '675 Baron Drive Andersonshire, AK 92664', 'Ryder McDermott & Sons', true, 80000);

INSERT INTO offices 
(office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price)
VALUES (45, 4, 8000, 16, 8, '77359 Cullen River Carabury, WI 19659', 'Jordane and Price', true, 210000);

INSERT INTO offices 
(office_num, floors, sq_ft, cubicles, bathrooms, address, name, occupied, price)
VALUES (34, 10, 25000, 110, 20, '150 Corrine Pass Stantonbury, LA 37012', 'Norwood Shields', false, 450000);



--======== STOREFRONT ==========
INSERT INTO storefronts 
(address, occupied, price, kitchen, sq_ft, owner, outdoor_seat)
VALUES ('140 Tracy Land West Amira, UT 85106', false, 110000, false, 2300, 'Novella and Welsh', true);

INSERT INTO storefronts 
(address, occupied, price, kitchen, sq_ft, owner, outdoor_seat)
VALUES ('8635 Willis Harbor New Carleton, WA 61579', true, 185000, true, 3200, 'Maverick-Reinger', false);

INSERT INTO storefronts 
(address, occupied, price, kitchen, sq_ft, owner, outdoor_seat)
VALUES ('786 Troy Lane Otistown, WY 94493', true, 95000, false, 2000, 'Dr. Salma Lebsack', false);