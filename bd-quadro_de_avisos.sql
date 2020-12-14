CREATE DATABASE quadro_de_avisos;

USE quadro_de_avisos;

CREATE TABLE avisos (
ID_avisos INT(11) NOT NULL AUTO_INCREMENT,
titulo VARCHAR(100) NOT NULL,
data DATE NOT NULL,
mensagem VARCHAR(250) NOT NULL,
PRIMARY KEY (ID_avisos)
);