import React from 'react'
import Heading from '../../common/Heading'
import { location } from '../../data/Data'
import './location.css'
const Location = () => {
  return (
      <>
          <section className="location padding">
              <div className="container">
                  <Heading title="Explore By Location" subtitle="Explore your dream
                  house or property by location, find the property closest to you" />

                  <div className="content grid3 mtop">
                      {location.map((items, index) => {
                          const { title, villas, image, apartment, office } = items
                          return (
                              <div className="box" key={index}>
                                  <img src={image} alt="" />
                                  <div className="overlay">
                                      <h5>{title} </h5>
                                      <p>
                                          <label htmlFor="">
                                              {villas} Villas
                                          </label>
                                          <label htmlFor="">
                                              {office} Offices
                                          </label>
                                          <label htmlFor="">
                                              {apartment} Apartments
                                          </label>
                                      </p>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div>
          </section>
      </>
  )
}

export default Location