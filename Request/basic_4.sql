--Afficher une liste des rooms d'un type donné (chambre simple, twin, vip...), dans un hotel donn

SELECT room.id_room, room.room_type
FROM room
INNER JOIN hotel ON room.id_hotel = hotel.id_hotel
WHERE hotel.hotel_name = 'Akory hotel Fianarantsoa'
AND room.room_type = 'VIP';
