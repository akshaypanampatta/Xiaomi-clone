import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import About from '../components/About/About'
import Service from '../components/Service/Service'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Container/>
        <About/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default Home