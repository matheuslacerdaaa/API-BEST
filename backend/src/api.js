import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import Vendas from '../src/controller/vendas/vendasController.js'
import Despesas from '../src/controller/despesas/despesasController.js'
import Cadastro from '../src/controller/cadastro/cadastroController.js'
import Pedidos from '../src/controller/pedidos/pedidosController.js'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())
servidor.use(Vendas, Despesas, Cadastro, Pedidos)




servidor.listen(process.env.PORT, () => console.log(`A API SUBIU NA PORTA ${process.env.PORT}`))