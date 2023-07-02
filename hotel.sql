CREATE DATABASE gestion_hotel;
--creation de la base de données gestion d'hotel

CREATE TABLE hotel(
    id_hotel int primary key,
    nom varchar(50) not null,
    adresse varchar(250) not null,
    nombre_de_chambre int not null,
    telephone varchar(13) not null,
    email varchar(50) not null,
    etoile int not null
);