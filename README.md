# Films Voter

A simple app where users can log in and vote for their favorite film. It is built using AWS Amplify's authentication and GraphQL API tools.

## Hosted site

- Can be viewed [here](https://dev.d2u95bcucizt5t.amplifyapp.com)

## Prerequisites

- AWS account
- AWS Amplify CLI, connected to your AWS account (instructions [here](https://docs.amplify.aws/cli/start/install))

## Local installation steps

- In an empty directory, run `amplify init --app <URL of this Github repo>`
- Once the backend has been configured in the cloud, the front end react app will open in the browser

## Once installed locally:

- Add some sample data, e.g. via the [DynamoDB console](https://eu-west-2.console.aws.amazon.com/dynamodb/home?region=eu-west-2#tables:), following the schema defined at `amplify/backend/api/filmsvoter/schema.graphql` and using a string of "film" for the "type" attribute of every entry.
- Run the app if it is not already open: `npm start`
- Create an account using your email address
- Log in to view films and vote
- To run tests: `npm test`
