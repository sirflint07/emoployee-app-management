import React from 'react'
import Header from './pages/Header'
// import Footer from './pages/Footer'

function Layout({children}) {
  return (
    <>
      <Header />
        {children}
    </>
  )
}

export default Layout
