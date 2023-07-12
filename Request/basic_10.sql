SELECT h.*
FROM hotel h
INNER JOIN province_available pa ON h.id_province = pa.id_province
WHERE pa.province_name = 'nom_de_la_province';