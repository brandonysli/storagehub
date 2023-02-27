import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import NavBar from './components/NavBar'
import {GoogleOAuthProvider } from '@react-oauth/google';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

export const link = createHttpLink({
  uri: "http://localhost:3000/api/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
    <ApolloProvider client={client}>
      <NavBar /> 
      <Component {...pageProps} />
    </ApolloProvider>
    </GoogleOAuthProvider>
  </>
  )
}
