import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'

import getConfig from 'next/config';

export default function App({ Component, pageProps }: AppProps) {
  const { publicRuntimeConfig } = getConfig();
  const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID
  return (
    <GoogleOAuthProvider clientId = { GOOGLE_CLIENT_ID } >
      <Component {...pageProps} />
    </GoogleOAuthProvider>
    
  )
}
