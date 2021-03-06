import { gql } from "apollo-boost";

const USER_SIGN_IN = gql`
  mutation AuthLogin($email: String!, $password: String!) {
    AuthLogin(email: $email, password: $password) {
      token
    }
  }
`;

export default USER_SIGN_IN;
