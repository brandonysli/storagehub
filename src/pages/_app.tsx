import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../lib/apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
//import { getConfig } from 'next/config'

export default function App(props: any) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  console.log("apolloClient", apolloClient);
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
        <ApolloProvider client={apolloClient}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </GoogleOAuthProvider>
    </>
  );
}
