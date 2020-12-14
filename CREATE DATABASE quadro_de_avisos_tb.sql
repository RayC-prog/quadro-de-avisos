CREATE DATABASE quadro_de_avisos_tb

USE quadro_de_avisos_tb

CREATE TABLE Avisos
(
  ID_avisos INT(11) NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  mensagem VARCHAR(250) NOT NULL,
  PRIMARY_KEY (ID_avisos)
)
