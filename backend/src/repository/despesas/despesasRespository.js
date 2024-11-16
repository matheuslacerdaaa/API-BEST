
import con from "../connection.js"

export default async function Consultar(){

    const comando = `
    
    select id_despesas  id,
            ds_data  data,
            nm_descricao    descricao,
            ds_categoria  categoria,
            ds_valor   valor,
            nm_responsavel  responsavel,
            ds_pagamento pagamento
    from  tb_despesas
    `
    
    let resposta = await con.query(comando)
    let registro = resposta[0]
    
    return registro
    }



export async function Inserir(despesa){

const comando = `


insert into tb_despesas(ds_data,nm_descricao, ds_categoria, ds_valor, nm_responsavel, ds_pagamento)
			values   (?,?,?,?,?,?); 
`


let resposta = await con.query(comando, [despesa.data, despesa.descricao, despesa.categoria, despesa.valor,despesa.responsavel, despesa.pagamento])
let registro = resposta[0]
return registro.insertId
}


export async function Alterar(id, despesa){

    const comando = `
    
    update tb_despesas
    set ds_data = ?,
        nm_descricao = ?,
        ds_categoria = ?,
        ds_valor = ?,
        nm_responsavel = ?,
        ds_pagamento = ?
    where id_despesas = ?;    
    `
    
    
let resposta = await con.query(comando, [despesa.data, despesa.descricao, despesa.categoria, despesa.valor,despesa.responsavel, despesa.pagamento, id])
let registro = resposta[0]
    
return registro.affectedRows
 }
    

    
 export async function Deletar (id){

const comando = `
delete from tb_despesas
where id_despesas = ?;
    `
let resposta = await con.query(comando, [id])
let registro = resposta[0]
    
return registro.affectedRows
    
    
}
    