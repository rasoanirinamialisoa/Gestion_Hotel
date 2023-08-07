--Afficher la liste des promotions en cours actuellement

SELECT * FROM promotion WHERE current_date BETWEEN "begin" AND "end";
