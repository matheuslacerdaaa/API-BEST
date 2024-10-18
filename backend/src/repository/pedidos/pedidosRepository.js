import con from "../connection.js";



export default async function Consultar(){

const comando = `

select id_pedidos  id,
        ds_data  data,
        ds_preco    preco,
        nm_cliente  cliente,
        nm_produto   produto,
        nr_quantidade  quantidade,
        nm_vendedor vendedor,
        ds_tipovenda    tipo
from  tb_pedidos
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
} 


export async function Inserir(pedidos){

const comando = `


insert into tb_pedidos(ds_data, ds_preco, nm_cliente, nm_produto, nr_quantidade, nm_vendedor, ds_tipovenda)
	values (?, ?, ?, ?, ?, ?, ? ); 
`

let resposta = await con.query(comando, [pedidos.data, pedidos.preco, pedidos.cliente, pedidos.produto,pedidos.quantidade, pedidos.vendedor, pedidos.tipovenda])
let registro = resposta[0]
return registro.insertId
}
    
export async function Alterar(id, pedidos){

const comando = `

update tb_pedidos
set ds_data = ?,
    ds_preco = ?,
    nm_cliente = ?,
    nm_produto = ?,
    nr_quantidade = ?,
    nm_vendedor = ?
where id_pedidos = ?;    
`
    
    
let resposta = await con.query(comando, [pedidos.data, pedidos.preco, pedidos.cliente, pedidos.produto,pedidos.quantidade, pedidos.vendedor, pedidos.tipovenda, id])
let registro = resposta[0]
return registro.insertId
}


export async function Deletar (id){

const comando = `
delete from tb_pedidos
where id_pedidos = ?;
    `
let resposta = await con.query(comando, [id])
let registro = resposta[0]
    
return registro.affectedRows
    
}
    