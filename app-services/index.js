import LocalRDManager from "./graphql/local-state/LocalRDManager";
import LocalQMManager from "./graphql/local-state/LocalQMManager";
import RemoteQMManager from "./graphql/remote-state/RemoteQMManager";
import MesssagesProvider from "./messages/MesssagesProvider";
import Messages from "./messages/Messages";

const AppService = {
  LocalQMManager,
  LocalRDManager,
  RemoteQMManager,
  Messages,
  MesssagesProvider
};

export default AppService;
