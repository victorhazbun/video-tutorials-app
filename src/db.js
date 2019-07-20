const Bluebird = require('bluebird')
const knex = require('knex')

function createDb ({ connectionString }) {
  const client = knex(connectionString)

  return Bluebird.resolve(client.migrate.latest())
    .then(() => client)
}

module.exports = createDb
