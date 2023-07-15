--Afficher les chambres les plus réservés d'un hotel donné
SELECT *
FROM promotion
WHERE current_date BETWEEN "begin" AND "end";
