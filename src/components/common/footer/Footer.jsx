import React from 'react'
import './footer.css'
import img from '../../../images/logo.png'
import { footer } from '../../data/Data'
export const Footer = () => {
  return (
    <>
          <section className="footerContact">
              <div className="container">
                  <div className="send flex">
                      <div className="text">
                          <h1>Do you have Questions ?</h1>
                          <p>We'll help you to grow your career and growth</p>
                      </div>
                      <button className="btn5">
                          Contact Us Today
                      </button>
                  </div>
              </div>
          </section>

          <footer>
              <div className="container">
                  <div className="box">
                      <div className="logo">
                          <img src="../../images/icon.png" alt="" />
                          <h2>Do you need help with anything</h2>
                          <p>
                              recieve updates, hot deals, tutorials, discounts sent straight in your inbox every month
                          </p>
                          <div className="input flex">
                              <input type="text" placeholder='Email Address' name='' id='email' />
                              <button>Subscribe</button>
                          </div>
                      </div>
                  </div>
                  {footer.map((val) => {
                      return <div className="box">
                          <h3>{val.title}</h3>
                          <ul>
                              {val.text.map((items) => {
                                  return <li>{ items.list}</li>
                              })}
                          </ul>
                      </div>
                  })}
              </div>
              <div className="legal">
                  <span>&copy; 2021 CardoneCapital. Designed By M4Webmetrix </span>
              </div>
          </footer>
      </>

  )
}
