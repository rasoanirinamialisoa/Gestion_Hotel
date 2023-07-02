CREATE TABLE receptionniste (
    id_receptionniste int primary key,
    nom varchar(50) not null,
    prenom varchar(50) not null,
    adresse varchar(20) not null,
    telephone varchar(13) not null,
    email varchar(30) not null
);