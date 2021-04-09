import Snoowrap from 'snoowrap'
const packageJson = require('../package.json')

const { CLIENT_ID, CLIENT_SECRET, USERNAME, PASSWORD } = process.env

export const getClient = () => {
  return new Snoowrap({
    userAgent: `node:${packageJson.name}:${packageJson.version} (by /u/${USERNAME})`,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    username: USERNAME,
    password: PASSWORD,
  })
}
