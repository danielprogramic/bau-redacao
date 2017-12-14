console.log("Bem vindo!!!!");
//create instancia express
const express = require('express')
  //create ins bodyparser object
const bodyParser = require('body-parser')
  //habilita cors
const cors = require('cors')
  //morgan serve para listar o SO do usuário que navega pela URI
const morgan = require('morgan')
  //sequelize ORM for NODEJS BD by SQLITE
const { sequelize } = require('./models')
  //config é script js das configurações
const config = require('./config/config')
  //declara instancia principal do express
const app = express()
  //insere o morgan na middlaware do app 
app.use(morgan('combined'))
  //insere(USAR) body parse JSOn na middleware do app
app.use(bodyParser.json())
  //insere cors na midd.. do app
app.use(cors())
  //aponta o script das rotas na minha API
require('./routes')(app)
  // de forma sincrona inicial meu serviço de APis
  // sequelize.sync()
  //   .then(() => {
  //     app.listen(config.port)
  //     console.log(`Server started on port ${config.port}`)
  //   })
app.listen(process.env.PORT || 8081)
console.log(`Server started on port ${config.port}`)