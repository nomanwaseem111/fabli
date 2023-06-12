import React from 'react'
import Banner from '../components/Banner'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import TextileClients from '../components/TextileClients'
import TextileFeatures from '../components/TextileFeatures'
import TextileHistory from '../components/TextileHistory'
import TextileNumbers from '../components/TextileNumbers'
import TextileProgress from '../components/TextileProgress'
import TextileServices from '../components/TextileServices'

const Home = () => {
  
  
    return (
    <>
     <div className="site-main">

        <Banner />
      <TextileFeatures /> 

       <TextileHistory /> 

      <TextileNumbers />

        <TextileServices />

        <TextileProgress />

        <Testimonials />

<Blog />

        <TextileClients /> 
      </div> 
    </>
  )
}

export default Home
