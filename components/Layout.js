import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Header from './Header'


const Layout = ({ title, description, children }) => {


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        
        <Link rel='icon' href="/favicon-ico"/>  
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="hilalkrg" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FF5F5F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>    
      </Head>
      <div className='relative z-10 px-3 overflow-hidden min-h-screen bg-[#f8f8f8] dark:bg-gray-900 dark:text-white font'>
      <div className='w-full h-full'>
        <Header/>
      {children}
      </div>
      </div>
      
    </>
  )
}

export default Layout