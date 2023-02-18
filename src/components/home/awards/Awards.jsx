import React from 'react'
import './awards.css'
import Heading from '../../common/Heading'
import { awards } from '../../data/Data'

const Awards = () => {
  return (
    <>
          <section className="awards padding">
              <div className="container">
                  <Heading title={"Over 124,000+ Happy User Being With Us Still They Love Our Services"}
                      subtitle="Our Awards" />
                  
                  <div className="content grid4 mtop">
                      {awards.map((val, index) => {
                          return <div className='box' key={index}>
                              <div className="icon">
                                  <span>{val.icon} </span>
                              </div>
                              <h1>{val.number} </h1>
                              <p>{val.name} </p>
                              </div>
                      })}
                  </div>
              </div>
    </section>
    </>
  )
}

export default Awards