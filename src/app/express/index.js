/*
The application layer of the system uses [express](https://expressjs.com/) to
handle routing HTTP requests.  This file sets up the express application.
*/
const express = require('express')
const { join } = require('path')

const mountMiddleware = require('./mount-middleware')
const mountRoutes = require('./mount-routes')

function createExpressApp ({ config, env }) { // (1)
  const app = express() // (2)

  // Configure PUG
  app.set('views', join(__dirname, '..')) // <callout id="co.express.pug" /
  app.set('view engine', 'pug')

  mountMiddleware(app, env) // (3)
  mountRoutes(app, config) // (4)

  return app
}

module.exports = createExpressApp
