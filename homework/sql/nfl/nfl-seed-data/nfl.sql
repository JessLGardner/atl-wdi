1. SELECT name FROM teams;
2. SELECT stadium, head_coach FROM teams WHERE UPPER(conference) = UPPER('NFC');
3. SELECT head_coach FROM teams WHERE UPPER(conference) = UPPER('AFC') AND UPPER(division) = UPPER('South');
4. SELECT COUNT (*) FROM players;
5. SELECT name, head_coach FROM teams WHERE conference = 'NFC' AND division = 'North' OR conference = 'AFC' AND division = 'East';
6. SELECT name FROM players ORDER BY salary DESC LIMIT 50;
7. SELECT AVG(salary) FROM players;
8. SELECT name, position FROM players WHERE salary > 10000000;
9.