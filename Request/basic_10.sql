--Afficher la liste des hotels dans une localisation (province) donnée
SELECT h.hotel_name, h.address
FROM hotel h
INNER JOIN province_available pa ON h.id_province = pa.id_province
WHERE pa.province_name = 'Majunga';
