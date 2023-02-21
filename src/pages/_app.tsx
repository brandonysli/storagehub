import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import NavBar from './components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  
  <Component {...pageProps} />
  
  </>
  )
}
