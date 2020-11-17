# Films Voter

A simple app where users can log in and vote for their favorite film. It is built using AWS Amplify's authentication and GraphQL API tools.

## Hosted site

- Can be viewed [here](https://dev.d2u95bcucizt5t.amplifyapp.com)

## Prerequisites

- AWS account
- AWS Amplify CLI, connected to your AWS account (instructions [here](https://docs.amplify.aws/cli/start/install))

## Local installation steps

- In an empty directory, run `amplify init --app <URL of this Github repo>`
- Once the back end has been configured in the cloud and installation is complete, the front end React app will open in the browser

## Once installed locally:

- Add some sample data, e.g. via the [DynamoDB console](https://eu-west-2.console.aws.amazon.com/dynamodb/home?region=eu-west-2#tables:), following the format of this example item:<sup id="a1">[1](#f1)</sup>

```
{
  "__typename": "Film",
  "createdAt": "2020-11-04T16:47:35.936Z",
  "description": "Soviet science fiction art film co-written and directed by Andrei Tarkovsky",
  "id": "2jf95783hdek3",
  "likes": 13,
  "title": "Solaris",
  "type": "film",
  "updatedAt": "2020-11-16T12:01:17.203Z",
  "year": 1972
}
```

- Run the app if it is not already open: `npm start`
- Create an account using your email address
- Log in to view films and vote
- To run tests: `npm test`

---

<sup id="f1">1</sup> The "type" attribute with a value of "film" is needed on every item in order to act as a partition key for the `byLikes` secondary index. See [this guide](https://docs.amplify.aws/guides/api-graphql/query-with-sorting/q/platform/js) in the Amplify docs.
