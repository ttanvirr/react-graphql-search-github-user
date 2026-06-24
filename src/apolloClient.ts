import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"

// GitHub GraphQL API endpoint
const GITHUB_GRAPHQL_API = "https://api.github.com/graphql"

// Configure HTTP connection to GitHub's GraphQL API
// Including authentication token from environment variables
const httplink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    // Github Personal Access Token
  },
})

// Create the Apollo Link chain
// Order matters: errorLink will run before httpLink
const link = ApolloLink.from([httplink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
