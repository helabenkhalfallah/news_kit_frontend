import gql from 'graphql-tag'

const SIDE_MENU_STATUS = gql`
  query sideMenuStatus {
    paymentModal @client {
      isOpen
      __typename
    }
  }
`

const SIDE_MENU_OPEN = gql`
  mutation openSideMenu {
    openSideMenu @client
  }
`

const SIDE_MENU_CLOSE = gql`
  mutation closeSideMenu {
    closeSideMenu @client
  }
`

const SIDE_MENU_QM = {
  SIDE_MENU_STATUS,
  SIDE_MENU_OPEN,
  SIDE_MENU_CLOSE,
}

export default SIDE_MENU_QM
