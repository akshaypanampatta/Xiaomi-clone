import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import About from '../components/About/About'
import Service from '../components/Service/Service'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Container/>
        <About/>
        <Service/>
    </div>
  )
}

export default Home