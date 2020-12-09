//importar o express
const express = require('express')
const bodyParser = require('body-parser')

//importando as rotas do aviso
const routerAvisos = require('./components/avisos/AvisosController')



//inicilizar o express
const app = express()

//configurar a view engine e a pasta publica
app.set('view wngine','ejs')
app.use(express.static('public'))

//configurar o body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//porta 
app.listen(3000)
