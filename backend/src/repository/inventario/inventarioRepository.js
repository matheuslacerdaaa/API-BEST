import con from "../connection.js";



export default async function Consultar(){

const comando = `

select id_inventario  id,
        nm_item  item,
        ds_categoria    categoria,
        ds_dataadicionada  adicionado,
        nr_estoque   estoque,
        ds_datavalidade  validade,
        ds_fornecedor fornecedor,
        ds_status    status
from  tb_inventario
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
} 



