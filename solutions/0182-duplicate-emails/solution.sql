-- Write your PostgreSQL query statement below
select email as Email 
from Person p
group by email 
having count(*) > 1;


