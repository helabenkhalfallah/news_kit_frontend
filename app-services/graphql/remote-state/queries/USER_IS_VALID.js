import { gql } from "apollo-boost";
import AppCommons from "../../../../app-core/commons";

const { AppLogger } = AppCommons;

/*eslint-disable*/
export default apolloClient =>
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
    AppLogger.info("USER_IS_VALID data : ", data);
    return { profile: data };
  }).catch(error => {
    // Fail gracefully
    AppLogger.error("USER_IS_VALID error : ", error);
    return { profile: {} };
  });
