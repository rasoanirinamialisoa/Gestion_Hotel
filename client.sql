CREATE TABLE client(
    id_client int primary key,
    nom varchar(50) not null,
    prenom varchar(50) not null,
    date_de_naissance date not null,
    adresse varchar(150) not null,
    email varchar(30) not null,
    telephone_n1 varchar(13) not null,
    telephone_n2 varchar(13),
    sexe char(1),
    numero_cin int not null,
    id_facture_client int,
    foreign key (id_facture_client) references facture(id_facture)
);
