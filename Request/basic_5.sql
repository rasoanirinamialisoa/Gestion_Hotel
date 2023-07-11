SELECT P.nom, P.description, S.periode
FROM Promotion P
INNER JOIN Saison S ON P.id_saison = S.id_saison;
