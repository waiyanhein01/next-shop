import React from 'react'
import '../styles/globals.css'
import Header from '@/app/components/Header'

const Layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout