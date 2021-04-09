import { Submission } from 'snoowrap'

export const processSubmission = (submission: Submission) => {
  // submission.id is identifier for post
  // submission.selftext_html is content of post
  console.log(submission)

  // TODO:
  // 1. Check if this post has already been processed
  // 2. Check if this post has any tickers. If present:
  //   a. Check if market cap is below $1B
  //   b. Check if this is a SPAC
  //   c. If either of the conditions are true, remove post
  // 3. Record that this post has been processed
}
