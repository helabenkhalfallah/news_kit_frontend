import Cookies from "universal-cookie";

/**
 * cookie tag name
 */
const cookieTag = "token";

/**
 * cookies factory
 */
const bakeCookies = () => new Cookies();

/**
 * save cookie
 * @param {*} token
 */
const save = token => {
  const cookies = bakeCookies();
  cookies.set(cookieTag, token, {
    path: "/",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

/**
 * load cookies
 * @param {*} request
 */
const load = request => {
  let token = "";
  if (request && request.headers && request.headers.cookie) {
    token = request.headers.cookie;
  } else {
    token = bakeCookies().get(cookieTag);
  }
  return token ? token.replace("token=", "").replace("%20", " ") : "";
};

/**
 * remove cookie
 */
const remove = () => {
  const cookies = bakeCookies();
  cookies.remove(cookieTag, {
    maxAge: -1 // Expire the cookie immediately
  });
};

/**
 * cookies manager
 */
const CookiesManager = {
  load,
  save,
  remove
};

export default CookiesManager;
