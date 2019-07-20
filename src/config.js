/*
The system makes heavy use of dependency injection.  This file wires up all the
dependencies, making use of the environment.
*/

// Primitives
const createDb = require('./db')
const createHomeApp = require('./app/home')

// ...

const createRecordViewingsApp = require('./app/record-viewings')

function createConfig ({ env }) {

  // ...
  const db = createDb({
    connectionString: env.databaseConnectionString
  })
  const homeApp = createHomeApp({ db })

  const recordViewingsApp = createRecordViewingsApp({ db })

  return {
    env,
    // ...
    db,
    homeApp,
    recordViewingsApp
  }
}

module.exports = createConfig
