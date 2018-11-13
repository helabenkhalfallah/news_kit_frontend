import React, { Fragment } from "react";
import ReactTable from "react-table";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import { Error, Loading, Empty } from "../../app-core";
import { USERS_LIST } from "../../app-services";

// table columns name
const usersTableHeaders = [
  {
    id: "id",
    Header: "User Id",
    accessor: "id"
  },
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  },
  {
    Header: "Birthday",
    accessor: "birthday"
  },
  {
    Header: "Job",
    accessor: "job"
  }
];

// display list
const UsersList = ({ className }) => (
  // query user
  <Query query={USERS_LIST} pollInterval={200}>
    {({ loading, error, data }) => {
      // log query status
      // user list loading status
      if (loading) {
        return <Loading />;
      }

      // user list error status
      if (error) {
        return <Error message={error.message} />;
      }

      // user list emtpy status
      if (!data || !data.users) {
        return <Empty />;
      }

      // render only if data
      const { users } = data;
      return (
        <Fragment>
          <div>
            <ReactTable
              className="user-list-table"
              defaultPageSize={5}
              sortable
              multiSort
              resizable
              filterable={false}
              data={users}
              columns={usersTableHeaders}
            />
          </div>
        </Fragment>
      );
    }}
  </Query>
);

// prop type validation
UsersList.propTypes = {
  className: PropTypes.string
};

// default prop
UsersList.defaultProps = {
  className: null
};

export default UsersList;
