import withApollo from './apollo/withApollo'
import initApollo from './apollo/initApollo'
import CookiesManager from './cookies/CookiesManager'
import Redirect from './routes/Redirect'

const AppCommons = {
  withApollo,
  initApollo,
  CookiesManager,
  Redirect,
}

export default AppCommons
