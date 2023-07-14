--Afficher la liste des receptionnistes, avec l'hotel auquel ils sont rattachés
SELECT *                                                                                                                         
FROM receptionist 
INNER JOIN hotel  ON receptionist.id_hotel = hotel.id_hotel;
