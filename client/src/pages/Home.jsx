import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import KeyFeatures from '../components/KeyFeatures'
import Contact from '../components/Contact'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <KeyFeatures/>
      <Contact/>
      <Faqs/>
      <Footer/>
    </>
  )
}

export default Home
