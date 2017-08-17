CLUE 1
SELECT * FROM country WHERE region = 'Southern Europe' ORDER BY population ASC;

CLUE 2
SELECT language FROM countrylanguage WHERE countrycode = 'VAT';

CLUE 3
SELECT * FROM countrylanguage WHERE UPPER(language) = UPPER('Italian') ORDER BY percentage DESC;

CLUE 4
SELECT * FROM city WHERE countrycode = 'SMR';

CLUE 5
SELECT * FROM city WHERE name LIKE 'Ser%';
SELECT name FROM country WHERE code = 'BRA';

CLUE 6
SELECT capital FROM country WHERE name = 'Brazil';
SELECT name FROM city WHERE id = '211';

CLUE 8
SELECT name FROM city WHERE population = '91084';


-- She's in ____________________________!
Santa Monica

