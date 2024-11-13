create database bestburgers;

use bestburgers;


create table tb_inventario(
id_inventario int primary key auto_increment,
nm_item varchar (200),
ds_categoria varchar(200),
ds_dataadicionado varchar(200),
nr_estoque int,
ds_datavalidade varchar(200),
ds_status varchar(200)
);

create table tb_despesas (
id_despesas int primary key auto_increment,
hr_horario varchar(200),
ds_preco  decimal (16,2),
ds_descricao    varchar(200),
nm_categoria    varchar(200),
nm_responsavel    varchar(200),
ds_pagamento    varchar(200)
);


create table tb_vendas(
id_vendas int primary key auto_increment,
hr_horario varchar(200),
ds_preco decimal (16,2),
nm_produto varchar (200),
nr_quantidade int,
nm_cliente varchar (200),
nm_vendedor varchar (200)
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