/**
 * Side Bar QM : Queries & Mutations
 */
import { gql } from 'apollo-boost'

const SIDE_BAR_STATUS = gql`
  query SideBarStatus {
    sideBar @client {
      isOpen
      __typename
    }
  }
`

const SIDE_BAR_OPEN = gql`
  mutation openSideBar {
    openSideBar @client
  }
`

const SIDE_BAR_CLOSE = gql`
  mutation closeSideBar {
    closeSideBar @client
  }
`

const SIDE_BAR_TOGGLE = gql`
  mutation toggleSideBar {
    toggleSideBar @client
  }
`

const SIDE_BAR_QM = {
  SIDE_BAR_STATUS,
  SIDE_BAR_OPEN,
  SIDE_BAR_CLOSE,
  SIDE_BAR_TOGGLE,
}

export default SIDE_BAR_QM
