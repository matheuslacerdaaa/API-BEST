import con from "../connection.js";

export default async function Vendasprimeira(){

const comando = `
SELECT 
    SUM(ds_valor * nr_quantidade) AS total_vendas
FROM 
    tb_vendas
WHERE 
    ds_data <= '2024-11-07';
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}


export async function Vendassegunda(){

const comando = `
SELECT 
    SUM(ds_valor * nr_quantidade) AS total_vendas
FROM 
    tb_vendas
WHERE 
    ds_data > '2024-11-07' and ds_data <= '2024-11-14';
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export async function Vendasterceira(){

const comando = `
    
SELECT 
SUM(ds_valor * nr_quantidade) AS total_vendas
FROM 
    tb_vendas
WHERE 
    ds_data > '2024-11-14' and ds_data <= '2024-11-21';
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}


export async function Vendasquarta(){

const comando = `

SELECT 
SUM(ds_valor * nr_quantidade) AS total_vendas
FROM 
tb_vendas
WHERE 
ds_data > '2024-11-21' and ds_data <= '2024-11-30';
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}






export async function Despesasprimeira(){

const comando = `
SELECT 
    (SELECT SUM(ds_valor * nr_quantidade) 
     FROM tb_vendas 
     WHERE ds_data <= '2024-11-07') 
    - 
    (SELECT SUM(ds_valor) 
     FROM tb_despesas 
     WHERE ds_data <= '2024-11-07') AS total;
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export async function Despesassegunda(){

const comando = `

SELECT 
    (SELECT SUM(ds_valor * nr_quantidade) 
     FROM tb_vendas 
     WHERE ds_data > '2024-11-07' and ds_data <='2024-11-14') 
    - 
    (SELECT SUM(ds_valor) 
     FROM tb_despesas 
     WHERE ds_data > '2024-11-07' and ds_data <= '2024-11-14') AS total;   
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}


export async function Despesasterceira(){

const comando = `
SELECT 
    (SELECT SUM(ds_valor * nr_quantidade) 
     FROM tb_vendas 
     WHERE ds_data > '2024-11-14' and ds_data <='2024-11-21') 
    - 
    (SELECT SUM(ds_valor) 
     FROM tb_despesas 
     WHERE ds_data > '2024-11-14' and ds_data <= '2024-11-21') AS total;  
 
`



let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export async function Despesasquarta(){

const comando = `
SELECT 
    (SELECT SUM(ds_valor * nr_quantidade) 
     FROM tb_vendas 
     WHERE ds_data > '2024-11-21' and ds_data <='2024-11-30') 
    - 
    (SELECT SUM(ds_valor) 
     FROM tb_despesas 
     WHERE ds_data > '2024-11-21' and ds_data <= '2024-11-30') AS total;  
 
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}






export async function Total(){

const comando = `
select
(select sum(ds_valor * nr_quantidade) from tb_vendas) -
(select sum(ds_valor) from tb_despesas) AS saldo;
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}




export async function Totalbruto(){

const comando = `
SELECT 
    SUM(ds_valor * nr_quantidade) AS total_vendas
FROM 
    tb_vendas;
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

























