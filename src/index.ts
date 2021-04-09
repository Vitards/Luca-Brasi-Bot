require('dotenv').config()
import { SubmissionStream } from 'snoostorm'
import { getClient } from './getClient'
import { processSubmission } from './processSubmission'

async function main() {
  const client = getClient()

  // subscribe to submissions feed
  const submissions = new SubmissionStream(client, {
    subreddit: 'Vitards',
    limit: 10,
    pollTime: 2000,
  })
  submissions.on('item', processSubmission)
}

main()
