import React from 'react'
import Header from './components/Header'
import Navigations from './components/Navigations'
import Content from './components/Content'
import Footer from './components/Footer'
export default function Layout() {
  return (
    <div>
     <Header />
     <Navigations />
     <Content />
     <Footer />
      
    </div>
  )
}
