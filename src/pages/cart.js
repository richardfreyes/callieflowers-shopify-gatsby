import * as React from "react"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Layout from "../shared/components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { StoreContext } from "../shared/context/store-context"
import { LineItem } from "../shared/components/line-item"
import { formatPrice } from "../shared/utils/format-price"
import Seo from "../shared/components/seo";

export default function CartPage() {
  const { addDateAndTime, checkout, loading } = React.useContext(StoreContext)
  const [ activeDateIndex, setactiveDateIndex ] = React.useState(null)
  const [ activeTimeIndex, setactiveTimeIndex ] = React.useState(null)
  const [ senderName, setSenderName ] = React.useState('')
  const [ cardDesc, setMessageCard ] = React.useState('')
  const [ deliveryDate, setDateValue ] = React.useState('')
  const [ deliveryTime, setTimeValue ] = React.useState('')
  const [ dateIsActive, isDateActive ] = React.useState(false)
  const [ hasData, setHasData ] = React.useState(true)
  const [ activeDP, isDPActive ] = React.useState(false)
  const emptyCart = checkout.lineItems.length === 0
  const handleCheckout = () => {
    if(deliveryDate && deliveryTime && senderName && cardDesc) {
      setHasData(true)
      const isBrowser = typeof window !== `undefined`;
      let checkoutUrl;
      if(isBrowser) {
        
        if(window.location.hostname === 'www.callieflowers.com') {
          checkoutUrl = checkout.webUrl.replace("callieflowers.myshopify.com", "secure.callieflowers.com");
        } 

        if(window.location.hostname === 'devcallieflowers.gatsbyjs.io') {
          window.open(checkout.webUrl)
        } 

        if(window.location.hostname === 'localhost') {
          checkoutUrl = checkout.webUrl.replace('localhost', "dev-callieflowers.myshopify.com");
        }
      }
      window.open(checkoutUrl, "_self")
    } else {
      setHasData(false)
    }
  }
  const messageList = [
    {
      title: "Happy Birthday",
      desc: "Wishing you a very happy birthday! May all your dreams come true"
    },
    {
      title: "Anniversary",
      desc: "I’m so lucky to have you and your love. Thanks for putting up with me for another year! Happy Anniversary!"
    },
    {
      title: "Sorry",
      desc: "I know I was wrong. I hope you can forgive me.."
    },
    {
      title: "Romance",
      desc: "Every day with you is a wonderful addition to my life's journey. I love you!"
    },
    {
      title: "Get well soon",
      desc: "Thoughtful prayers are being sent your way with the hopes that you will feel better soon."
    },
    {
      title: "Sympathy",
      desc: "Accept my deepest and heartfelt condolences."
    }
  ]

  function changeCardHandler(event) {
    setMessageCard(event.target.value)
  }

  function changeSenderHandler(event) {
    setSenderName(event.target.value)
  }

  function clickCardHandler(data) {
    setMessageCard(data)
  }

  const TODAY_GLOBAL = new Date()
  const TOMORROW_GLOBAL = new Date()
  TOMORROW_GLOBAL.setDate(TOMORROW_GLOBAL.getDate() + 1)
  const NEXT_GLOBAL = new Date()
  NEXT_GLOBAL.setDate(NEXT_GLOBAL.getDate() + 2)
  const MONTH_GLOBAL = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const DAYS_GLOBAL = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let dateTime = [
    {
      date: [
        { month: MONTH_GLOBAL[TODAY_GLOBAL.getMonth()] +" "+ TODAY_GLOBAL.getDate(), day: DAYS_GLOBAL[TODAY_GLOBAL.getDay()], year: TODAY_GLOBAL.getFullYear() },
        { month: MONTH_GLOBAL[TOMORROW_GLOBAL.getMonth()] +" "+ TOMORROW_GLOBAL.getDate(), day: DAYS_GLOBAL[TOMORROW_GLOBAL.getDay()], year: TODAY_GLOBAL.getFullYear() }
      ]
    }, 
    {
      time: [ { val: "8AM - 1PM" }, { val: "1PM - 6PM" } ]
    }
  ]

  function handleDateClick(data, i, type,) {
    setactiveDateIndex(i);
    isDateActive(true);
    if(type === 'custom') { isDPActive(true) }
    if(type === 'day') { isDPActive(false) }
    if(i === 0) { dateChanged(TODAY_GLOBAL) }
    if(i === 1) { dateChanged(TOMORROW_GLOBAL) }
  }

  function handleTimeClick(data, i) {
    setactiveTimeIndex(i);
    setTimeValue(data.val)
  }

  function handleDateChange(value, e) {
    dateChanged(value)
  }

  function dateChanged(selectedDate) {
    setDeliveryDate(selectedDate.getDate() +"/"+ (selectedDate.getMonth()+1) +"/"+ selectedDate.getFullYear())
  }

  function setDeliveryDate(selDate){
    let selDateArr = selDate.split("/");
    let newSelDate = "";
    if (parseInt(selDateArr[0]) <10){ newSelDate += "0" + selDateArr[0]}
    else { newSelDate += selDateArr[0] }
    if (parseInt(selDateArr[1]) <10){ newSelDate += "/0" + selDateArr[1] }
    else { newSelDate += "/"+ selDateArr[1] }
    newSelDate += "/" + selDateArr[2]
    setDateValue(newSelDate)
  }

  addDateAndTime(deliveryDate, deliveryTime, cardDesc, senderName)

  return (
    <Layout>
      <Seo title="Cart" />
      {emptyCart ? (
        <div className="cart-empty-page">
          <div className="section shopping-cart-empty">
            <div className="container">
              <h1>Shopping cart</h1>
              <div className="content">
                <div className="icon-cart">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </div>
                <p className="text">No placed orders yet</p>
                <div className="btn-holder">
                  <Link className="btn-brand-gradient" to="/">Search a flower now!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-page">
          <div className="section shopping-cart">
            <div className="container">
              <h1>Shopping cart</h1>
              <div className="row row-holder">
                <div className="col-lg-6 col-holder">
                  {checkout && checkout.lineItems.map((item) => (
                    <LineItem item={item} key={item.id} />
                  ))}
                </div>
                <div className="col-lg-6 col-holder">
                  <p className="delivery-title">Select a delivery date and time*:</p>
                  <div className="btn-holder">
                    {
                      dateTime[0].date.map((date, i) => (
                        <div className={`bubble ${activeDateIndex === i ? 'active' : null} ${!deliveryDate && !hasData ? 'required' : ''}`} key={date.month} role="button" tabIndex={0} onClick={() => {handleDateClick(date, i, 'day')}} onKeyDown={() => {handleDateClick(date, i, 'day')}}>
                          <p className="day">{date.day}</p>
                          <p className="month">{date.month}</p>
                        </div>
                      ))
                    }
                    <div className={`bubble ${activeDateIndex === 2 ? 'active' : null} ${!deliveryDate && !hasData ? 'required' : ''}`} key='custom' role="button" tabIndex={0} onClick={() => {handleDateClick(null, 2, 'custom')}} onKeyDown={() => {handleDateClick(null, 2, 'custom')}}>
                      <p className="custom">Custom Date</p>
                    </div>
                  </div>
                    {
                      activeDP ? (
                        <div className="date-picker">
                          <DatePicker 
                            inline
                            onChange={(value, e) => handleDateChange(value, e)}
                            minDate={new Date()}
                          />
                        </div>
                      ) : ( null )
                    }
                  <div className="order__times-main">
                    { dateIsActive ? (
                      <ul className="order__times-wrap">
                        { dateTime[1].time.map((time, i) => ( 
                          <li key={time.val}>
                            <div
                              className={`li ${activeTimeIndex === i ? 'active' : null} ${!hasData && !deliveryTime ? 'required' : ''}`}
                              data-value="8AM-1PM" 
                              role="button"
                              tabIndex={0}
                              onClick={() => {handleTimeClick(time, i)}}
                              onKeyDown={() => {handleTimeClick(time, i)}}>
                              <span>{time.val}</span>
                            </div>
                          </li> 
                        )) }
                      </ul>
                    ) : ( null )}
                  </div>
                  <div className="sender-holder">
                    <p>Sender Name*:</p>
                    <input className={!senderName && !hasData ? 'required' : ''} type="text" value={senderName} onChange={event => changeSenderHandler(event)}/>
                  </div>
                  <div className="personal-message">
                    <p>Choose your personal card message*:</p>
                    <textarea className={!cardDesc & !hasData ? 'required' : ''} placeholder="Write your message here..." value={cardDesc} onChange={event => changeCardHandler(event)}></textarea>
                    <div className="automated-messages">
                      {messageList && messageList.map(data => (
                        <span role="button" tabIndex={0} key={data.title} onClick={() => { clickCardHandler(data.desc) }} onKeyDown={() => { clickCardHandler(data.desc) }}>{data.title}</span>
                      ))}
                    </div>
                  </div>
                  <div className="total-price">
                  <p>Total: 
                    <span>
                      {formatPrice( checkout.totalPriceV2.currencyCode, checkout.totalPriceV2.amount )}
                    </span>
                  </p>
                  </div>
                  <div className="place-order">
                    <button className="btn-brand-gradient" onClick={handleCheckout} disabled={loading}>Place Order</button>
                    { !hasData ? <span>Please fill out the required fields.</span> : null }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
