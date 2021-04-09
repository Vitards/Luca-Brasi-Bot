import { Submission } from 'snoowrap'

export const processSubmission = (submission: Submission) => {
  // submission.id is identifier for post
  // submission.selftext_html is content of post
  console.log(submission)
}
