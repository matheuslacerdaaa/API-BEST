import { Router } from "express";
import Consultar from "../../repository/pedidos/pedidosRepository.js";
import { Inserir } from "../../repository/pedidos/pedidosRepository.js";
import { Alterar } from "../../repository/pedidos/pedidosRepository.js";
import { Deletar } from "../../repository/pedidos/pedidosRepository.js";


const endpoints = Router();


endpoints.get('/pedidos', async (req,resp) =>{

try{

let registro = await Consultar()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})



endpoints.post('/pedidos', async (req,resp) => {

try{

let pedidos = req.body
let id = await Inserir(pedidos)
resp.send({id:id})
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.put('/pedidos/:id', async (req,resp) =>{

try {
let id = req.params.id
let pedidos = req.body
let linhas = await Alterar(id, pedidos)

if(linhas >= 1){
resp.send() 
}else{
resp.status(404).send({erro: 'nenhum registro alterado'})
}
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.delete('/pedidos/:id', async (req,resp) =>{

try{
let id = req.params.id
let linhas = await Deletar(id)

if(linhas >= 1){
resp.send()
}else{
resp.status(404).send({erro: 'nenhum registro deletado'})
}
}catch(err){
resp.status(400).send({erro: err.message})
}})




export default endpoints;