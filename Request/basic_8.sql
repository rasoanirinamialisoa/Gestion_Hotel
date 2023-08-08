--Afficher le total des payements reçus par mobile money

SELECT SUM(p.amount_paid) AS total_mobile_money_payments
FROM payment p
INNER JOIN payment_method pm ON pm.id_payment_method = pm.id_payment_method
WHERE pm.mobile_money = 't';