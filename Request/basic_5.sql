--Afficher les promotions en fonction de la saison (période), tout hotel confondu
SELECT *
FROM promotion
WHERE CURRENT_DATE BETWEEN "begin" AND "end";
