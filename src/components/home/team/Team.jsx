import React from 'react'
import './team.css'
import Heading from '../../common/Heading'
import { team } from '../../data/Data'

const Team = () => {
  return (
    <>
          <section className="team background">
              <div className="container">
                  <Heading title={"Our Featured Agents"}
                      subtitle="Meet our Oustanding team of real estate agents" />
                  
                  <div className="content mtop grid3">
                      {team.map((val, index) => {
                          return (
                              <div className="box" key={index}>
                                  <button className="btn3">{val.listings} Listings </button>
                                  <div className="details">
                                      <div className="img">
                                          <img src={val.dp} alt="" />
                                          <i className="fa fa-circle-check"></i>
                                      </div>
                                      <i className="fa fa-location dot"></i>
                                      <label htmlFor="">{val.location} </label>
                                      <h4>{val.name}</h4>
                                      <ul>
                                          {val.icon.map((icon, index) => {
                                              return <li key={index}> <i className={icon}></i>  </li>
                                          } )}
                                      </ul>
                                      <div className="button flex">
                                          <button>
                                              <i className="fa fa-envelope"></i>
                                              Message
                                          </button>
                                          <button className='btn4'>
                                              <i className="fa fa-phone-alt"></i>
                                              
                                          </button>
                                      </div>
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

export default Team