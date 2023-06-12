-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE projetoIndividual;

USE projetoIndividual;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(45));

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY,
nome VARCHAR (45));

CREATE TABLE votacao (
idVotos INT AUTO_INCREMENT,
fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
fkPersonagem INT, FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem),
CONSTRAINT pkComposta primary key (idVotos, fkUsuario, fkPersonagem));

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
