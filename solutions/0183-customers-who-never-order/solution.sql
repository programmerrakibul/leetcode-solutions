select c.name as "Customers"
from Customers c
where not exists (
    select o.customerId 
    from Orders o
    where o.customerId = c.id
);
