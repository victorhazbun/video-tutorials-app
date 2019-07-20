const colors = require('colors/safe')
const dotenv = require('dotenv')

const packageJson = require('../package.json')

const envFromRealEnvironment = process.env.NODE_ENV || 'development'
const path = `.env.${envFromRealEnvironment}`

dotenv.config({ path, silent: envFromRealEnvironment === 'production' })

function requireFromEnv (key) {
  if (!process.env[key]) {
    // eslint-disable-next-line no-console
    console.error(`${colors.red('[APP ERROR] Missing env variable:')} ${key}`)

    return process.exit(1)
  }

  return process.env[key]
}

module.exports = {
  appName: requireFromEnv('APP_NAME'),
  cookieSecret: requireFromEnv('COOKIE_SECRET'),
  databaseConnectionString: requireFromEnv('DATABASE_CONNECTION_STRING'),
  emailDirectory: requireFromEnv('EMAIL_DIRECTORY'),
  env: requireFromEnv('NODE_ENV'),
  port: parseInt(requireFromEnv('PORT'), 10),
  systemSenderEmailAddress: requireFromEnv('SYSTEM_SENDER_EMAIL_ADDRESS'),
  version: packageJson.version
}
