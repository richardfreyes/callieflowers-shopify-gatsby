import * as React from "react"
import Accordion from 'react-bootstrap/Accordion'
import Layout from "../shared/components/layout"
import Seo from "../shared/components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const Faqs = () => (
  <Layout>
    <Seo title="FAQs" />
    <div className="faq-page">
      <div className="section content">
          <div className="container">
            <h1 className="page-title">Frequently Asked Questions</h1>
            <h4 className="sub-title">Products Related</h4>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="0">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">1. Will my flowers look exactly like the picture I have chosen?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">The photographs are designed to give a general guide for colors, styles, designs and occasions. We endeavor at all times to create designs as close as possible to your selection. Blooms may vary according to seasonal availability or when they do not meet our quality standards. Substitutions of equivalent value and quality may be necessary to fill your requirements.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="1">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">2. Do the flowers come in a vase?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                    <p className="text-default">Some of our arrangements do come with a vase included in the price, please refer to the picture. For those that don't, we may choose one from a range of appropriate containers to add to your order if you so fancy.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>


            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="2">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">3. Can I include a gift message with my order?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                    <p className="text-default">Yes, of course! The gift message will be printed on a high quality card and included with your order. The gift message itself can be up to 200 characters long. Please input the message to recipient during checkout process.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="3">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">4. Can I order Cakes, chocolates, or stuff toys?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">Yes. We have a selection of Add on items such as cakes, chocolates, balloons and stuff toys. You can check our Add on categories for those add on item you are interested.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <h4 className="sub-title">Order Related</h4>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="4">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">1. How do I order from your website?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">It's as easy as clicking a few buttons. Once you've found a product that you like, simply click the 'Buy now' button next to the bouquet to be taken to our easy 3-step checkout. During checkout, you'll be asked to provide the name and address of the person to whom you're sending the gift, your own invoicing address and your credit card details. Of course, you'll also get to choose a delivery date and time and, if you're feeling eloquent, compose a card message. Throughout the whole speedy process, you can rest assured that all your details are stored and transmitted super securely, and never ever shared with anyone else.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="5">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">2. How much are shipping/delivery charges?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">Weekday: Free same day delivery if order comes in before 4pm Philippine Time Saturday: Free same day delivery if order comes in before 12:30pm Philippine Time Sunday and Public Holiday: Free delivery on Sunday or Public Holiday.</p>
                      <p className="text-default">Delivery charges will be shown during checkout.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="6">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">3. Can I send my order anonymously?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">If you fancy being all mysterious or surprise the recipient, we're happy to play along and we promise not to reveal your true identity to anybody at all. You've got our word, in law as well as in good faith: for Data Protection purposes, all information provided by the sender is kept anonymous. To do so, please tick the option Hide my name from recipient . If you have more requirements, please specify in the text box Message to Store.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="7">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">4. How do I amend my order?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">If you want to amend your order, i.e. change gift card message, delivery address and etc, please contact us as early as possible either by email or through phone. Please note we can only guarantee to accept amendments if they are received at least 3 hours before dispatch of your order.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <h4 className="sub-title">Delivery Related</h4>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="8">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">1. Can you deliver at a specific date and time?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">We can deliver your order at any date. Although we offer a number of options for time slots (9am to 2pm, 2pm to 6pm and 6pm to 9pm), we are unable to accommodate specific requests for delivery other than within these delivery times.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </div>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="9">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">2. What can I do to ensure that my order is delivered successfully?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">A successful delivery depends on accurate information: the full name, address and postcode of the recipient. Delivery instructions (which can be added at checkout) are also useful if the property is difficult to locate or if the recipient is at a business, university or hospital. Here, as much information as possible (room numbers, departments, etc.) really helps.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="10">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">3. How can I check the status of my order?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">Upon check out, you will be given a reference number for your order. You may use our Track my order feature by typing in the reference number. You can track if your order has been confirmed, is still in progress, in transit or has been delivered successfully or if the item has been returned to our warehouse for some reason. You will also receive an email confirmation once the order has been delivered successfully.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="11">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">4. What happens if the recipient isn`t in when you deliver?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">Usually, we will call the recipient before delivery to make sure successful delivery. If you do not wish us to call before delivery, when recipient is not in, we may leave the order securely on the property, leaving the flowers with neighbors. Either way, a card will be left at the recipient's address to inform them where the flowers have been left.</p>
                      <p className="text-default">In the event that we're unable to leave the order securely on the property or with a neighbor, the flowers will be brought back to our depot and we'll contact you to arrange a redelivery.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </div>
            <h4 className="sub-title">Payment Related</h4>
            <div className="accordion-wrapper">
              <Accordion className="menu ul dropdown" flush>
                <Accordion.Item className="card" eventKey="12">
                  <Accordion.Header className="card-header">
                    <h5 className="section-sm-title">1. How can I pay for my order?</h5>
                    <FontAwesomeIcon className="fr-icon ei-chevron-down" icon={faChevronDown}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body">
                      <p className="text-default">We accept payment via Visa, Mastercard and paypal, Dragon pay and COD</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
      </div>
    </div>
  </Layout>
)

export default Faqs
