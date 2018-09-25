import { Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import cookie from 'cookie'
import redirect from '../lib/redirect'
import { Formik } from 'formik'
import * as Yup from 'yup'

const SIGN_IN = gql`
    mutation AuthLogin($email: String!, $password: String!){
      AuthLogin(email: $email, password: $password) {
        token
      }
    }
`

// user schema
const UserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required Email'),
  password: Yup.string()
    .required('Required Password'),
})

// TODO: Find a better name for component.
const SigninBox = ({ client }) => {
  return (
    <Mutation mutation={SIGN_IN} onCompleted={(data) => {
      // Store the token in cookie
      document.cookie = cookie.serialize('token', data.AuthLogin.token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
      // Force a reload of all the current queries now that the user is
      // logged in
      client.cache.reset().then(() => {
        redirect({}, '/')
      })
    }} onError={(error) => {
      // If you want to send error to external service?
      console.log(error)
    }}>
      {(signinUser, { data, error }) => (
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            birthday: '',
            job: '',
          }}
          validationSchema={UserSchema}
          onSubmit={(values) => {
            // log submit status
            console.log('onSubmit values : ', values)
            signinUser({
              variables:
              {
                email: values.email,
                password: values.password,
              },
            })
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) =>
            (
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
                {touched.email && errors && errors.email &&
                  <div>{errors.email}</div>
                }
                <input
                  type="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors && errors.password &&
                  <div>{errors.password}</div>
                }
                <div>
                  <button
                    type="submit"
                  >
                    Submit
                </button>
                </div>
              </form>
            )}
        />
      )}
    </Mutation>
  )
}

export default withApollo(SigninBox)
