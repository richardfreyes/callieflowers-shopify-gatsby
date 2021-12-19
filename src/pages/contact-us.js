import * as React from "react"
import Layout from "../shared/components/layout"
import Seo from "../shared/components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faEnvelopeOpenText, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

const ContactUs = () => (
  <Layout>
    <Seo title="Contact Us" />
    <div className="contact-page">
      <div className="section content page">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-desc">We'd love to hear from you! We are located in Makati City, Philippines. Have a question? Reach out to us!</p>
          <div className="row row-holder">
            <div className="col-12 col-holder static">
              <div className="featured-holder">
                <FontAwesomeIcon className="fr-icon ei-message-fill" icon={faComments}/>
                <p className="featured-title">Live Chat</p>
                <p className="desc">Click "Chat with Callie Flowers" on the bottom right</p>
              </div>
              <div className="featured-holder">
                <span className="fr-icon ei-mail-fill"></span>
                <FontAwesomeIcon className="fr-icon ei-mail-fill" icon={faEnvelopeOpenText}/>
                <p className="featured-title">Email Us</p>
                <p className="desc"><a href="email:care@callieflowers.ph">info@callieflowers.ph</a>  we usually reply within two hours</p>
              </div>
              <div className="featured-holder">
                <FontAwesomeIcon className="fr-icon ei-phone-fill" icon={faPhoneAlt}/>
                <p className="featured-title">Phone</p>
                <p className="desc">Give us a call: <a href="tel:09770884111">+63 977 0884 111</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactUs
