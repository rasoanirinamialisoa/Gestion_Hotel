SELECT h.*, COUNT(r.id_reservation) AS reservation_count
FROM hotel h
LEFT JOIN room r ON h.id_hotel = r.id_hotel
LEFT JOIN reservation rs ON r.id_reservation = rs.id_reservation
GROUP BY h.id_hotel
ORDER BY reservation_count ASC
LIMIT 1;