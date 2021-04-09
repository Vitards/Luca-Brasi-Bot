import Snoowrap from 'snoowrap'
const packageJson = require('../package.json')

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDDIT_USERNAME,
  REDDIT_PASSWORD,
} = process.env

export const getClient = () => {
  return new Snoowrap({
    userAgent: `node:${packageJson.name}:${packageJson.version} (by /u/${REDDIT_USERNAME})`,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    username: REDDIT_USERNAME,
    password: REDDIT_PASSWORD,
  })
}
