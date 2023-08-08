--Afficher la liste des payements avec le nom et le prénom du réceptionniste qui les a reçus

SELECT p.payment_date, p.amount_paid, p.number_night, p.room_occupied, p.deadline_payment, e.first_name, e.last_name
FROM payment p
INNER JOIN receptionist e ON p.id_employee = e.id_employee;
