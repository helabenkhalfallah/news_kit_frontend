import Routes from "./routes/Routes";
import BodyProvider from "./body/BodyProvider";
import LanguageManager from "./language/LanguageManager";
import ThemeManager from "./theme/ThemeManager";
import LocalizedStringUtils from "./localized-strings/LocalizedStringUtils";
import Dico from "./localized-strings/Dico";

const AppSettings = {
  LanguageManager,
  LocalizedStringUtils,
  Dico,
  ThemeManager,
  BodyProvider,
  Routes
};

export default AppSettings;
