// side menu resolver
const SideMenuResolver = {
  defaults: {
    sideMenu: {
      isOpen: false,
      __typename: 'sideMenu',
    },
  },
  resolvers: {
    Mutation: {
      openSideMenu: (_, $, { cache }) => {
        cache.writeData({
          data: {
            sideMenu: {
              isOpen: true,
              __typename: 'sideMenu',
            },
          },
        })
        return null
      },
      closeSideMenu: (_, $, { cache }) => {
        cache.writeData({
          data: {
            sideMenu: {
              isOpen: false,
              __typename: 'sideMenu',
            },
          },
        })
        return null
      },
    },
  },
}

export default SideMenuResolver
