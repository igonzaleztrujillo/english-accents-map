import React from 'react'
import PageLayout from '../../../../components/PageLayout'
import { login, logout, AUTH_PROVIDER_GOOGLE, AUTH_PROVIDER_FACEBOOK,
  AUTH_PROVIDER_TWITTER, AUTH_PROVIDER_GITHUB } from '../../../../services/auth'

export const AboutPage = React.createClass({
  render () {
    if (this.props.authLoading) {
      return <div>Loading</div>
    }
    return (
      <PageLayout>
        <div>Make a suggestion</div>
        { this.props.user
          ? <div>
            { this.props.user.email }
            <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
              onClick={logout}>
              Logout
            </button>
          </div>
          : <div>
              <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
                onClick={() => login(AUTH_PROVIDER_GOOGLE)}>
                Login with Google
              </button>
              <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
                onClick={() => login(AUTH_PROVIDER_FACEBOOK)}>
                Login with Facebook
              </button>
              <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
                onClick={() => login(AUTH_PROVIDER_TWITTER)}>
                Login with Twitter
              </button>
              <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
                onClick={() => login(AUTH_PROVIDER_GITHUB)}>
                Login with Github
              </button>
            </div>
        }
      </PageLayout>
    )
  },
  propTypes: {
    authLoading: React.PropTypes.bool,
    user: React.PropTypes.object
  }
})

export default AboutPage
