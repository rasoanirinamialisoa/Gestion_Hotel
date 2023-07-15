-- Afficher les hotels, avec le nombre de chambres par hotels

SELECT h.hotel_name, h.address, COUNT(r.id_room) AS total_rooms
FROM hotel h
LEFT JOIN room r ON h.id_hotel = r.id_hotel
GROUP BY h.hotel_name, h.address;
