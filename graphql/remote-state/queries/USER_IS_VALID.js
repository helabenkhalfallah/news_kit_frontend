import { gql } from 'apollo-boost'

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
    `,
  }).then(({ data }) => {
    console.log('USER_IS_VALID data : ', data)
    return { profile: data }
  }).catch((error) => {
    // Fail gracefully
    console.log('USER_IS_VALID error : ', error)
    return { profile: {} }
  })
)
