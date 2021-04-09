require('dotenv').config()
import { InboxStream, CommentStream, SubmissionStream } from 'snoostorm'
import { getClient } from './getClient'

async function main() {
  const client = getClient()

  // subscribe to submissions feed
  const submissions = new SubmissionStream(client, {
    subreddit: 'Vitards',
    limit: 10,
    pollTime: 2000,
  })
  submissions.on('item', console.log)
}

main()
