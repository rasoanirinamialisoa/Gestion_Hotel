--Afficher la liste des réservations en commençant par la plus récente, pour un hotel donné
SELECT * 
FROM reservation
WHERE id_hotel= id_hotel_données
ORDER BY date_arrived DESC;
