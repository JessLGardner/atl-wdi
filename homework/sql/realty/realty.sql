1. SELECT AVG(sq_ft) FROM offices;

2. SELECT COUNT(*) FROM apartments;

3. SELECT * FROM apartments WHERE occupied = false;

4. SELECT name FROM offices;

5. SELECT cubicles, bathrooms FROM offices WHERE id=3;

6. SELECT * from storefronts WHERE kitchen = true;

7. SELECT owner FROM storefronts WHERE outdoor_seat = true ORDER BY sq_ft DESC LIMIT 1;

8. SELECT name FROM offices ORDER BY cubicles ASC LIMIT 1;

9. SELECT name FROM offices ORDER BY cubicles + bathrooms DESC LIMIT 1;
