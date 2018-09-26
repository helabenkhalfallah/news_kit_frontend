import { Mutation, withApollo } from 'react-apollo'
import { Formik } from 'formik'
import * as Yup from 'yup'

import CookiesManager from '../../lib/cookies/CookiesManager'
import redirect from '../../lib/routes/redirect'
import graphqlManager from '../../graphql'

// user schema
const UserSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required Email'),
    password: Yup.string()
        .required('Required Password'),
})

// user auth sign
const USER_SIGN_IN = graphqlManager.USER_SIGN_IN
const AuthSignIn = ({ client }) => {
    return (
        <Mutation mutation={USER_SIGN_IN} onCompleted={(data) => {

            // Store the token in cookie
            CookiesManager.save(data.AuthLogin.token)

            // Force a reload of all the current 
            // queries now that the user is
            // logged in
            client.cache.reset().then(() => {
                redirect({}, '/')
            })

        }} onError={(error) => {
            // If you want to send error to external service?
            console.log('Signin error : ', error)
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
                        console.log('Signin values : ', values)
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

export default withApollo(AuthSignIn)
