import gql from 'graphql-tag'

const USERS_LIST = gql`
    {
      users{
        id,
        firstName,
        lastName,
        birthday,
        job
      }
    }
`
export default USERS_LIST
