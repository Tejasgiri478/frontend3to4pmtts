import React from 'react'
import Header from './components/partials/Header'
import Navbar from './components/partials/Navbar'
import Content from './components/partials/Content'
import Footer from './components/partials/Footer'
export default function Layout() {
  return (
    <div>
    <Header />
    <Navbar />
    <Content />
    <Footer />
      
    </div>
  )
}
