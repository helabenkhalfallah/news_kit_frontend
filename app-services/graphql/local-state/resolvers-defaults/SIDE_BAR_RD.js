/**
 * Side Bar RD : Resolvers & Defaults
 */
import LocalQMManager from "../LocalQMManager";
import UIAPI from "../../../../app-core/ui-api-lib";

const { SideMenuOptions } = UIAPI;
const { SideMenuStatut } = SideMenuOptions;
const { SIDE_BAR_QM } = LocalQMManager;
const { SIDE_BAR_STATUS } = SIDE_BAR_QM;

// type name
const typeName = "sideBar";

// side bar default state
const defaults = {
  sideBar: {
    __typename: typeName,
    isOpen: SideMenuStatut.close
  }
};

// side bar resolvers
const resolvers = {
  Mutation: {
    openSideBar: (_, $, { cache }) => {
      const data = {
        sideBar: {
          __typename: typeName,
          isOpen: SideMenuStatut.open
        }
      };
      cache.writeData({ data });
      return null;
    },
    closeSideBar: (_, $, { cache }) => {
      const data = {
        sideBar: {
          __typename: typeName,
          isOpen: SideMenuStatut.close
        }
      };
      cache.writeData({ data });
      return null;
    },
    toggleSideBar: (_, $, { cache }) => {
      const { sideBar } = cache.readQuery({ query: SIDE_BAR_STATUS });
      let isOpen = SideMenuStatut.open;
      if (sideBar && sideBar.isOpen === SideMenuStatut.open) {
        isOpen = SideMenuStatut.close;
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

const SIDE_BAR_RD = {
  defaults,
  resolvers
};
export default SIDE_BAR_RD;
