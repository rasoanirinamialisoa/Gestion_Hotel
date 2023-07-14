--Afficher la liste des clients qui n'ont pas encore payé en totalité leurs frais
SELECT c.id_client, c.name
FROM client c
INNER JOIN payment p ON p.id_client = c.id_client
WHERE p.total_amount_status = false;
