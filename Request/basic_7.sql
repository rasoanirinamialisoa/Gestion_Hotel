CREATE VIEW Facture AS
SELECT R.id_customer, SUM(P.montant_total) AS total_amount
FROM Client C
JOIN Price P ON C.id_price = P.id_price
GROUP BY P.id_price, R.id_customer;
