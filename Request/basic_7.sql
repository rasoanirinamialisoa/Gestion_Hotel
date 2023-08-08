--Afficher la liste des clients qui n'ont pas encore payé en totalité leurs frais

SELECT c.name, c.last_name,c.principal_contact, c.address, c.email
FROM client c
INNER JOIN payment p ON p.id_client = c.id_client
WHERE p.total_amount_status = false;
