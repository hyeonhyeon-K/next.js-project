import './globals.css'
// import { Inter } from 'next/font/google'
import { Providers } from "../redux/provider";
import Header from "./Header"
import Footer from './Footer';
import React from "react"
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function header({children}){
  return(
    <html lang="en">
    <body >
      <div className='headerdiv'>
        <Header/>
          <Providers>{children}</Providers>
        
      </div>
    <Footer/>
    </body>
    </html>
  )
}
