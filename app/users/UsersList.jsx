import React, { Fragment } from 'react'
import ReactTable from 'react-table'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import ErrorPage from '../commons/ErrorPage'
import AppService from '../../app-services'

const {
  RemoteQMManager,
} = AppService

// table columns name
const usersTableHeaders = [{
  id: 'id',
  Header: 'User Id',
  accessor: 'id',
},
{
  Header: 'First Name',
  accessor: 'firstName',
},
{
  Header: 'Last Name',
  accessor: 'lastName',
},
{
  Header: 'Birthday',
  accessor: 'birthday',
},
{
  Header: 'Job',
  accessor: 'job',
}]


// display list
const { USERS_LIST } = RemoteQMManager
const UsersList = ({ className }) => (
  // query user
  <Query
    query={USERS_LIST}
    pollInterval={200}
  >
    {({ loading, error, data }) => {
      // log query status
      // user list loading status
      if (loading) {
        return <div>LoadingPage</div>
      }

      // user list error status
      if (error) {
        return <ErrorPage message={error.message} />
      }

      // user list emtpy status
      if (!data || !data.users) {
        return <div>EmptyPage</div>
      }

      // render only if data
      const { users } = data
      return (
        <Fragment>
          <div>
            <ReactTable
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
      )
    }}
  </Query>
)

// prop type validation
UsersList.propTypes = {
  className: PropTypes.string,
}

// default prop
UsersList.defaultProps = {
  className: null,
}

export default UsersList
