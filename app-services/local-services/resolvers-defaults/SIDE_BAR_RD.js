/**
 * Side Bar RD : Resolvers & Defaults
 */
import { SIDE_BAR_STATUS } from "../..";
import { SIDE_MENU_OPEN, SIDE_MENU_CLOSE } from "../../../app-core";

// type name
const typeName = "sideBar";

// side bar default state
const SIDE_BAR_DEFAULTS = {
  sideBar: {
    __typename: typeName,
    isOpen: "closed"
  }
};

// side bar resolvers
const SIDE_BAR_RESOLVERS = {
  Mutation: {
    openSideBar: (_, $, { cache }) => {
      const data = {
        sideBar: {
          __typename: typeName,
          isOpen: SIDE_MENU_OPEN
        }
      };
      cache.writeData({ data });
      return null;
    },
    closeSideBar: (_, $, { cache }) => {
      const data = {
        sideBar: {
          __typename: typeName,
          isOpen: SIDE_MENU_CLOSE
        }
      };
      cache.writeData({ data });
      return null;
    },
    toggleSideBar: (_, $, { cache }) => {
      const { sideBar } = cache.readQuery({ query: SIDE_BAR_STATUS });
      let isOpen = SIDE_MENU_OPEN;
      if (sideBar && sideBar.isOpen === SIDE_MENU_OPEN) {
        isOpen = SIDE_MENU_CLOSE;
      }
      const data = {
        sideBar: {
          __typename: typeName,
          isOpen
        }
      };
      cache.writeData({ data });
      return null;
    }
  }
};

export { SIDE_BAR_DEFAULTS, SIDE_BAR_RESOLVERS };
