-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/


use sports;


create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(8));


INSERT INTO votos (jogo) VALUES 
('AYRTON SENNA'),
('MIKE TYSON'),
('PELÉ'),
('MICHAEL JORDAN'),
('MICHAEL PHELPS'),
('USAN BOLT');

select*from usuario;





CREATE TABLE votos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    jogo VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    fkusuario int,
FOREIGN KEY (fkusuario) 
REFERENCES usuario(id) 
);
    
    
SELECT 
    u.nome AS usuario,
    v.jogo,
    v.quantidade
FROM 
    votos v
left JOIN  
    usuario u
ON 
    v.fkusuario = u.id;







 SELECT jogo
FROM votos as max
ORDER BY quantidade DESC
LIMIT 1;

select jogo 
from votos as min 
order by quantidade asc
limit 1;
 ;


select sum(quantidade) from votos ;
    

-- CREATE DATABASE aquatech;

-- USE aquatech;

-- CREATE TABLE empresa (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	razao_social VARCHAR(50),
-- 	cnpj CHAR(14),
-- 	codigo_ativacao VARCHAR(50)
-- );

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50),
-- 	fk_empresa INT,
-- 	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300),
-- 	fk_empresa INT,
-- 	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
-- );

-- /* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );

-- insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
-- insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);