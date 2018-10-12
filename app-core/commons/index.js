import withApollo from './apollo/withApollo'
import initApollo from './apollo/initApollo'
import CookiesManager from './cookies/CookiesManager'
import Redirect from './routes/Redirect'
import AppLogger from './logger/AppLogger'

const AppCommons = {
  withApollo,
  initApollo,
  CookiesManager,
  Redirect,
  AppLogger,
}

export default AppCommons