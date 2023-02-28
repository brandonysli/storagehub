import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { HexColor } from "./modules/HexColor";
import NaiveTag from "./components/modular/NaiveTag";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import TextInput from "./components/modular/TextInput";
import React from "react";

import { useManyUserQuery } from "../gql/graphql";

//import GoogleLogin from "./components/GoogleLogin";
import GoogleOAuthLogin from "./components/GoogleOAuthLogin";
import GoogleLogin from "./components/GoogleLogin";

export default function Home() {
  const [credential, setCredential] = React.useState({});

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My web page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <span> Test here or below... </span>

        <NaiveTag
          backgroundColor={new HexColor("#d97706")}
          textColor={new HexColor("#22c55e")}
          tagname="BEST TAG NAME"
          tagSize="sm"
        />
        <TextInput />
        <Map lat={42.454323} lng={-76.475266} />
        <GoogleOAuthLogin />
      </main>
    </>
  );
}
