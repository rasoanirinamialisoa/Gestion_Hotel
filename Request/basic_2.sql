--Afficher la liste des receptionnistes, avec l'hotel auquel ils sont rattachés
SELECT r.first_name, r.last_name, r.email, r.work_contact, h.hotel_name                                                                                                               
FROM receptionist r
INNER JOIN hotel h ON r.id_hotel = h.id_hotel;
