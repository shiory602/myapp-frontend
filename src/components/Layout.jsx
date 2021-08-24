import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/Layout.scss'
import Box from '@material-ui/core/Box';

const Layout = ({children}) => (
  <React.Fragment>
    <Header />
      <Box className='m-top no-line' minHeight='80vh'>
        {children}
      </Box>
    <Footer footer="copyright SHIORI-Suzuki." />
  </React.Fragment>
)

export default Layout