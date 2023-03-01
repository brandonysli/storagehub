import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import NavBar from "./components/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ApolloProvider } from "@apollo/client";

import client from "../lib/apollo/client";
import Chat from "./components/Chat";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
        <ApolloProvider client={client}>
          <NavBar />
          <Component {...pageProps} />
          <Chat />
        </ApolloProvider>
      </GoogleOAuthProvider>
    </>
  );
}
