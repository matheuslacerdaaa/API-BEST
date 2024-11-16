create database bestburgers;
use bestburgers;


create table tb_vendas(
id_vendas int primary key auto_increment,
ds_data varchar(200),
ds_produto varchar(200),
nr_quantidade int,
ds_valor decimal(16,2),
nm_pagamento varchar (200),
nm_vendedor varchar (200)


);


create table tb_despesas (
id_despesas int primary key auto_increment,
ds_data varchar(200),
nm_descricao  varchar (200),
ds_categoria		varchar(200),	
ds_valor	int,
nm_responsavel	varchar(200),
ds_pagamento	varchar(200)
);



create table tb_inventario(
id_inventario int primary key auto_increment,
ds_entrada varchar (200),
ds_descricao varchar(200),
nm_nota varchar(200),	
ds_validade varchar(200),
ds_quantidade int,
ds_valor int
);



create table tb_cadastro(
id_cadastro int primary key auto_increment,
nm_nome varchar(200),
ds_email varchar(200),	
ds_senha varchar(200)
);


create table tb_usuario(
id_usuario int primary key auto_increment,
nm_usuario varchar(200),
ds_senha varchar(200)
);








   










                