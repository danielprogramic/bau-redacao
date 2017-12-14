const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

//DEVE FICAR NO MODELO----------------------------------------------------------
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
let login = {
    email: "admin@domrock.com.br",
    password: "teste12",
  }
  //DEVE FICAR NO MODELO---------------------------------------------------------- 
function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

let trasnformJSON = function(value) {
  return JSON.stringify(value)
}
module.exports = {
  register(req, res) {
    try {
      // const user = await User.create(req.body)
      // res.send(user.toJSON())
      res.send({
        message: `Hello ${req.body.email} ! Seu usuário está registrado. Seja Bem vindo!!!`
      })
    } catch (err) {
      res.status(403).send({
        error: 'This email account is already in user'
      })
    }
  },
  login(req, res) {

    if (trasnformJSON(login) == trasnformJSON(req.body)) {
      var hash = bcrypt.hashSync(login.password);
      let envio = res;
      bcrypt.compare(req.body.password, hash, function(err, res) {
        if (res) {
          envio.send({
            usuario: {
              email: req.body.email,
              password: hash,
            },
            token: jwtSignUser(login)
          })
        }
      });

    } else {
      res.status(403).send({
        error: 'Login ou Senha Inválido'
      })
    }
  },

}