import * as React from "react"
import Layout from "../../shared/components/layout"
import Seo from "../../shared/components/seo"

const AccountRegister = () => (
  <Layout>
    <Seo title="Register Account" />
    <div className="register-page">
      <div className="section form stars">
        <div className="container">
          <div className="form-wrapper">
            <form action="">
              <h1 className="title">Create Account</h1>
              <p className="desc">Create account to manage billing information. Also to check the product transactions history.</p>

              {/* <div className="error-wrapper">
                <h2>Please adjust the following:</h2>
                <ul>
                  <li>Incorrect email or password.</li>
                </ul>
              </div> */}
              <div className="group bot-spacer first-name">
                <input id="firstName" type="text" required />
                <label htmlFor="firstName">First Name</label>
              </div>

              <div className="group bot-spacer last-name">
                <input id="lastName" type="text" required />
                <label htmlFor="lastName">Last Name</label>
              </div>

              <div className="group bot-spacer email">
                <input id="email" type="text" required />
                <label htmlFor="email">Email</label>
              </div>

              <div className="group bot-spacer password">
                <input id="password" type="text" required />
                <label htmlFor="password">Password</label>
              </div>

              <div className="btn-holder btn-login">
                <input type="submit" value="Create" className="fr-btn btn-brand-gradient" tabindex="0" />
              </div>
              {/* <div className="btn-holder btn-register">
                <Link className="fr-btn" to="/">Dont' have an account?</Link>
              </div>
              <div className="btn-holder btn-forgot">
                <Link className="fr-btn" to="/">Forgot Password?</Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AccountRegister
