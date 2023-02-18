import React from 'react'
import './price.css'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard'



const Price = () => {
  return (
      <>
          <section className="price padding">
              <div className="container">
                  <Heading title="Select Your Package" subtitle="We have a very effecient and scalable package for you to get started
                  in investing into real estate, allow your money do the hardwork, while you relax" />
                  <PriceCard />
                  
              </div>
          </section>
      </>
  )
}

export default Price