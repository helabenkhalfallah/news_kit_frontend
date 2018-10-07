import React from 'react'
import { Mutation, withApollo } from 'react-apollo'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'


import CookiesManager from '../../../../lib/cookies/CookiesManager'
import redirect from '../../../../lib/routes/Redirect'
import Routes from '../../../../lib/routes/Routes'
import RemoteQMManager from '../../../../graphql/remote-state/RemoteQMManager'

// user schema
const UserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required Email'),
  password: Yup.string()
    .required('Required Password'),
})

// user auth sign
const { USER_SIGN_IN } = RemoteQMManager
const AuthSignIn = ({ client }) => (
  <Mutation
    mutation={USER_SIGN_IN}
    onCompleted={(data) => {
      // Store the token in cookie
      CookiesManager.save(data.AuthLogin.token)

      // Force a reload of all the current
      // queries now that the user is
      // logged in
      client.cache.reset().then(() => {
        redirect({}, Routes.HOME_PATH)
      })
    }}
    onError={(error) => {
      // If you want to send error to external service?
      console.log('Signin error : ', error)
    }}
  >
    {(signinUser, { data, error }) => (
      <Formik
        initialValues={
          {
            email: '',
            password: '',
          }
        }
        validationSchema={
          UserSchema
        }
        onSubmit={(values) => {
          // log submit status
          console.log('Signin values : ', values)
          signinUser(
            {
              variables:
              {
                email: values.email,
                password: values.password,
              },
            },
          )
        }}
        render={
          (
            {
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            },
          ) => {
            console.log(data)
            console.log(error)
            return (
              <form
                onSubmit={handleSubmit}
              >
                <input
                  type="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors && errors.email
                  && <div>{errors.email}</div>
                }
                <input
                  type="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors && errors.password
                  && <div>{errors.password}</div>
                }
                <div>
                  <button
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )
          }
        }
      />
    )}
  </Mutation>
)


// prop type validation
AuthSignIn.propTypes = {
  client: PropTypes.any,
}

// default prop
AuthSignIn.defaultProps = {
  client: null,
}

export default withApollo(AuthSignIn)
