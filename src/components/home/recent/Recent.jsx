import React from 'react'
import Heading from '../../common/Heading'
import './recent.css'
import RecentCard from './RecentCard'
const Recent = () => {
  return (
    <>
          <section className="recent padding">
              <div className="container">
                  <Heading title="Recent Property Listed" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Iusto natus, quasi quaerat deserunt quo assumenda
                   qui rem veniam cupiditate reiciendis, quam iste saepe eaque nemo? Quidem harum nihil sapiente nisi." />
                  <RecentCard />
              </div>
    </section>
    </>
  )
}

export default Recent