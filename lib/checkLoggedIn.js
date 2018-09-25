import gql from 'graphql-tag'

export default apolloClient => (
  apolloClient.query({
    query: gql`
      query UserProfile {
        UserProfile {
          id
          firstName
          lastName
          username
          email
          job
          birthday 
        }
      }
    `
  }).then(({ data }) => {
    console.log('loggedInUser data : ', data)
    return { loggedInUser: data }
  }).catch((error) => {
    // Fail gracefully
    console.log('loggedInUser error : ', error)
    return { loggedInUser: {} }
  })
)