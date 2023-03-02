import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import NavBar from './components/NavBar'

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
    <ApolloProvider client={client}>
      <NavBar /> 
      <Component {...pageProps} />
    </ApolloProvider>
  </>
  )
}
