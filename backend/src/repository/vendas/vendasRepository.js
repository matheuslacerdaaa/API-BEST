import con from "../connection.js";


export default async function Consultar(){

const comando = `

select id_vendas  id,
        ds_data  data,
        ds_produto    produto,
        nr_quantidade   quantidade,
        ds_valor    valor,
        nm_pagamento  pagamento,
        nm_vendedor vendedor
from  tb_vendas
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export async function Inserir(venda){

const comando = `


insert into tb_vendas(ds_data,ds_produto, nr_quantidade, ds_valor, nm_pagamento, nm_vendedor)
			values   (?,?,?,?,?,?); 
`


let resposta = await con.query(comando, [venda.data, venda.produto, venda.quantidade, venda.valor,venda.pagamento, venda.vendedor])
let registro = resposta[0]

return registro.insertId
}


export async function Alterar(id, venda){

const comando = `

update tb_vendas
set ds_data = ?,
    ds_produto = ?,
    nr_quantidade = ?,
    ds_valor = ?,
    nm_pagamento = ?,
    nm_vendedor = ?
where id_vendas = ?;    
`
let resposta = await con.query(comando, [venda.data, venda.produto, venda.quantidade, venda.valor,venda.pagamento, venda.vendedor, id])
let registro = resposta[0]

return registro.affectedRows
}

export async function Deletar (id){

const comando = `
delete from tb_vendas
where id_vendas = ?;
`
let resposta = await con.query(comando, [id])
let registro = resposta[0]

return registro.affectedRows


}