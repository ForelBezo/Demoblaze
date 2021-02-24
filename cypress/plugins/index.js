/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
const https = require('https')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const Buffer = require ('Buffer')
/*
module.exports = (on, config) => {
  on('task', {
    createAccount({ email, password }) {
      console.log('TO BES SURE : ' + email)
      let encodedPassword = new Buffer(password).toString('base64');
      console.log('BASE 64 ENcoded password ' + encodedPassword)
      const data = JSON.stringify({
        username: email,
        password: encodedPassword
      })
      const reqOptions = {
        hostname: 'https://api.demoblaze.com',
        path: '/signup',
        method: 'POST'
      }

      const req = https.request(reqOptions, res => {
        console.log(`statusCode: ${res.statusCode}`)
      })

      req.write(data)
      req.end()
    }

    
  })
}
*/
const axios = require('axios')
/**
 * @type {Cypress.PluginConfig}
  */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    createAccount( {email, password }) {
      return signup(email, password)
    }
    
  })
}

function signup(email, motdepasse) {
  return new Promise((resolve) => {
    axios
      .post('https://api.demoblaze.com/signup', {
        'username': email,
        'password': motdepasse
      }).then(res => {
        if(res.data === "") {
          resolve('User created')
        } 
        else if (res.data.errorMessage != undefined && res.data.errorMessage === "This user already exist.") {
          resolve('User already exists')
        }
      })
  })
}
