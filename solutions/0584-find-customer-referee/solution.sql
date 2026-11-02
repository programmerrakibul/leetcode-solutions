-- Write your PostgreSQL query statement below
SELECT c.name 
FROM Customer c
WHERE (
    c.referee_id is null 
    or c.referee_id  != 2
);
