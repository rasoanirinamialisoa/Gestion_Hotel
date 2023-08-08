--Afficher une liste des rooms d'un type donné (chambre simple, twin, vip...), dans un hotel donn

SELECT room.id_room, room.number, room.room_type, hotel.hotel_name
FROM room
INNER JOIN hotel ON room.id_hotel = hotel.id_hotel
WHERE hotel.hotel_name = 'Akory hotel Majunga'
AND room.room_type = 'Queen';

SELECT room.id_room, room.room_type, hotel.hotel_name
      FROM room
      INNER JOIN hotel ON room.id_hotel = hotel.id_hotel
      WHERE hotel.hotel_name = $1
      AND room.room_type = $2;
