SELECT R.nom, R.prenom, H.nom
FROM Receptionniste R
INNER JOIN Hotel H ON R.id_hotel = H.id_hotel;
