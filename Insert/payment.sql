
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-11-24', 808795.04, 1, 1, '2023-04-20', true, true, 1);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-06-04', 270175.76, 2, 2, '2023-04-14', false, false, 2);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-10-30', 36677.74, 3, 3, '2022-12-07', true, false, 3);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-09-18', 68987.47, 4, 4, '2022-12-25', true, false, 4);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-04-05', 466982.16, 5, 5, '2023-01-04', false, true, 5);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-12-20', 430127.55, 6, 6, '2023-05-07', true, true, 6);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-01-20', 145171.21, 7, 7, '2023-06-21', true, false, 7);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-01-01', 293212.71, 8, 8, '2022-09-20', true, false, 8);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-09-11', 135455.07, 9, 9, '2023-04-24', false, true, 9);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-01-20', 43942.01, 10, 10, '2022-09-15', false, true, 10);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-08-05', 71234.56, 11, 11, '2022-12-31', true, false, 11);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-11-15', 62345.67, 12, 12, '2023-03-18', false, true, 12);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-02-28', 93456.78, 13, 13, '2022-10-15', true, false, 13);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-05-20', 56789.89, 14, 14, '2023-01-30', false, true, 14);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-07-10', 98765.43, 15, 15, '2023-06-10', true, true, 15);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-04-01', 23456.78, 16, 16, '2023-02-01', false, false, 16);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-12-15', 87654.32, 17, 17, '2023-05-15', true, true, 17);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-07-02', 34567.89, 18, 18, '2023-04-02', false, false, 18);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2022-09-25', 65432.10, 19, 19, '2023-03-25', true, true, 19);
insert into payment (payment_date, amount_paid, number_night, room_occupied, deadline_payment, lending_status, total_amount_status, id_client) values ('2023-03-10', 12345.67, 20, 20, '2023-01-10', false, false, 20);

UPDATE payment SET id_employee = 3 WHERE id_payment = 2;
UPDATE payment SET id_employee = 4 WHERE id_payment = 3;
UPDATE payment SET id_employee = 5 WHERE id_payment = 4;
UPDATE payment SET id_employee = 20 WHERE id_payment = 19;
UPDATE payment SET id_employee = 3 WHERE id_payment = 2;
UPDATE payment SET id_employee = 4 WHERE id_payment = 3;
UPDATE payment SET id_employee = 20 WHERE id_payment = 19;
UPDATE payment SET id_employee = 21 WHERE id_payment = 20;

DO $$
DECLARE
  counter INT := 3;
BEGIN
  FOR i IN 2..21 LOOP
    EXECUTE 'UPDATE payment SET id_employee = ' || counter || ' WHERE id_payment = ' || i;
    counter := counter + 1;
  END LOOP;
END $$;
