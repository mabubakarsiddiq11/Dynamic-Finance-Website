import { useState } from 'react'
import './App.css'
import Data from './Components/Data'
import Header from './Components/Header'
import Hero  from './Components/Hero-Section'
import Features from './Components/Features'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'


function App() {

  const {header,hero,features,testimonials,} = Data

  const user  = {
    login : false
  }

  return (
    <>
      <Header header={header}/>
      <Hero hero={hero} user ={user}/>
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />
    </>
  )
}

export default App
