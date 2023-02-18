import React from 'react'
import Back from '../common/Back'
import './about.css'
import img from '../../images/property.jpg'
import Heading from '../common/Heading'
const About = () => {
  return (
      <>
        <section className="about">
              <Back cover={img} name="About Us" title={"About Us - Who We Are?"} />      
              <div className="container flex mtop">
                  <div className="left row">
                      <Heading title={"Our Agency Story"}
                          subtitle="Check out our company story and work process" />
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Cupiditate distinctio doloribus, eum est aliquid, corporis facere
                          labore ea enim placeat dolor eveniet molestias autem sequi. Illo
                          tempora nisi tenetur beatae!
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Cupiditate distinctio doloribus, eum est aliquid, corporis facere
                          labore ea enim placeat dolor eveniet molestias autem sequi. Illo
                          tempora nisi tenetur beatae!
                      </p>
                      <button className="btn2">
                          More About Us
                      </button>
                  </div>

                  <div className="right row">
                      <img src={img} alt="" />
                  </div>
              </div>
        </section>
      </>
  )
}

export default About