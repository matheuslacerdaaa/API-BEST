import { Router } from "express"
import Vendasprimeira from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Vendassegunda } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Vendasterceira } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Vendasquarta } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Despesasprimeira } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Despesassegunda } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Despesasterceira } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Despesasquarta } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Total } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Totalbruto } from "../../repository/vendasedepesas/vendasedespesasRepository.js"


const endpoints = Router()



endpoints.get('/vendasprimeira', async (req,resp) =>{

try{

let registro = await Vendasprimeira()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.get('/vendassegunda', async (req,resp) =>{

try{

let registro = await Vendassegunda()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})


endpoints.get('/vendasterceira', async (req,resp) =>{

try{

let registro = await Vendasterceira()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})


endpoints.get('/vendasquarta', async (req,resp) =>{

try{

let registro = await Vendasquarta()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})







endpoints.get('/despesasprimeira', async (req,resp) =>{

try{

let registro = await Despesasprimeira()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.get('/despesassegunda', async (req,resp) =>{

try{

let registro = await Despesassegunda()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})


endpoints.get('/despesasterceira', async (req,resp) =>{

try{

let registro = await Despesasterceira()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.get('/despesasquarta', async (req,resp) =>{

try{

let registro = await Despesasquarta()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})



endpoints.get('/total', async (req,resp) =>{

try{

let registro = await Total()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.get('/totalbruto', async (req,resp) =>{

try{

let registro = await Totalbruto()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})





export default endpoints;