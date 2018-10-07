import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { withClientState } from 'apollo-link-state'
import fetch from 'isomorphic-unfetch'
import resolvers from '../../graphql/local-state/resolvers'

// init
const { defaults } = resolvers
let apolloClient = null
let tokenClient = null
const graphqlUri = process.env.APP_GRAPHQL_PATH

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

// create Apollo Client instance
function create(initialState, { getToken }) {
  // default graphql uri
  const httpLink = createHttpLink({
    uri: graphqlUri,
    credentials: 'same-origin',
  })

  // apollo/graphql authentication
  const authLink = setContext((_, { headers }) => {
    const token = tokenClient
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    }
  })

  // apollo cache
  const cache = new InMemoryCache().restore(initialState || {})

  // apollo link state
  const stateLink = withClientState({
    cache,
    ...resolvers,
    defaults,
  })

  // Apollo Client instance
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([
      stateLink,
      authLink.concat(httpLink),
    ]),
    cache,
  })
}

// init apollo
export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  tokenClient = options ? options.getToken() : ''
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
