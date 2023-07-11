SELECT r.*, h.hotel_name
FROM receptionist r
INNER JOIN hotel h ON r.id_hotel = h.id_hotel;
