const dotenv = require('dotenv')

const envFromRealEnvironment = process.env.NODE_ENV || 'development'
const path = `.env.${envFromRealEnvironment}`

dotenv.config({ path, silent: envFromRealEnvironment === 'production' })

module.exports = process.env.DATABASE_CONNECTION_STRING
