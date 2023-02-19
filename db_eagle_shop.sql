CREATE DATABASE eagle_shop;

CREATE TABLE usuario(
	id_user int primary key auto_increment,
    senha_user varchar(250) not null,
    email_user varchar(250) not null unique,
    cell_user char(13) unique,
    nome_user varchar(60) not null,
    nick_user varchar(30) not null
);

CREATE TABLE lista_jogos (
	id_jogos varchar(36) primary key unique,
    nome_jogo varchar(120) not null,
    preco_jogo decimal(5,2) not null,
    url_img varchar(120) not null
);

CREATE TABLE venda (
    id_user int unique
);

describe usuario;

drop table venda;
drop table usuario;
drop table lista_jogos;


select * from venda;
select * from usuario;
select * from lista_jogos;

ALTER TABLE usuario MODIFY id_user varchar(50) NOT NULL;