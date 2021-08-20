import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer footer="copyright SHIORI-Suzuki." />
  </React.Fragment>
)

export default Layout