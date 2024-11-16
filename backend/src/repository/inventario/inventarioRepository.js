import con from "../connection.js";



export default async function Consultar() {

        const comando = `

select id_inventario  id,
        ds_entrada  entrada,
        ds_descricao    descricao,
        nm_nota  nota,
        ds_validade   validade,
        ds_quantidade  quantidade,
        ds_valor    valor
from  tb_inventario
`

let resposta = await con.query(comando)
let registro = resposta[0]
return registro
}       

export  async function Inserir(item) {
        const comando = `
     
        insert into tb_inventario(ds_entrada, ds_descricao, nm_nota, ds_validade, ds_quantidade, ds_valor)
			values   (?,?,?,?,?,?);
     `
     let resposta = await con.query(comando, [item.entrada, item.descricao, item.nota, item.validade, item.quantidade, item.valor])
     let registro = resposta[0]

     return registro.insertId
}


export async function Alterar(id, item){

        const comando = `
        
        update tb_inventario
        set ds_entrada = ?,
            ds_descricao = ?,
            nm_nota = ?,
            ds_validade = ?,
            ds_quantidade = ?,
            ds_valor = ?
        where id_inventario= ?;    
        `
        
        
        let resposta = await con.query(comando, [item.entrada, item.descricao, item.nota, item.validade, item.quantidade, item.valor, id])
        let registro = resposta[0]
   
    return registro.affectedRows
}

   
export async function Deletar (id){

        const comando = `
        delete from tb_inventario
        where id_inventario = ?;
            `
        let resposta = await con.query(comando, [id])
        let registro = resposta[0]
            
        return registro.affectedRows
}
            

