// all used strings

// all language keys
const KEYS = {
  RESET_THEME_BT: "RESET_THEME_BT",
  TOGGLE_THEME_BT: "TOGGLE_THEME_BT",
  USER_SIGN_BT: "USER_SIGN_BT",
  USER_REGISTER_BT: "USER_REGISTER_BT",
  SELECT_NO_OPTIONS: "SELECT_NO_OPTIONS",
  SELECT_PLACEHOLDER: "SELECT_PLACEHOLDER"
};

// all dico strings
const DATA = {
  en: [
    {
      key: KEYS.SELECT_PLACEHOLDER,
      value: "Select an item"
    },
    {
      key: KEYS.SELECT_NO_OPTIONS,
      value: "No options to display"
    },
    {
      key: KEYS.RESET_THEME_BT,
      value: "Reset Theme"
    },
    {
      key: KEYS.TOGGLE_THEME_BT,
      value: "Toggle Theme"
    },
    {
      key: KEYS.USER_SIGN_BT,
      value: "Sign in"
    },
    {
      key: KEYS.USER_REGISTER_BT,
      value: "Register"
    }
  ],
  fr: [
    {
      key: KEYS.SELECT_PLACEHOLDER,
      value: "Choisir un élément"
    },
    {
      key: KEYS.SELECT_NO_OPTIONS,
      value: "Aucune options à afficher"
    },
    {
      key: KEYS.RESET_THEME_BT,
      value: "Réinitialiser Theme"
    },
    {
      key: KEYS.TOGGLE_THEME_BT,
      value: "Changer Theme"
    },
    {
      key: KEYS.USER_SIGN_BT,
      value: "Se connecter"
    },
    {
      key: KEYS.USER_REGISTER_BT,
      value: "Créer un compte"
    }
  ]
};

const Dico = {
  KEYS,
  DATA
};

export default Dico;
