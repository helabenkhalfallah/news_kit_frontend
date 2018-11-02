import LocalRDManager from "./graphql/local-state/LocalRDManager";
import LocalQMManager from "./graphql/local-state/LocalQMManager";
import RemoteQMManager from "./graphql/remote-state/RemoteQMManager";

const AppService = {
  LocalQMManager,
  LocalRDManager,
  RemoteQMManager
};

export default AppService;
