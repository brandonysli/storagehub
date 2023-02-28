import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

import { UserInfo, useUserAuthQuery } from "../../gql/graphql";
import React from "react";

export default function GoogleLogin() {
  const [credentials, setCredentials] = useState({});

  const handleLoginSuccess = async (codeResponse: any) => {
    try {
      console.log("here");
      const { loading, error, data } = await useUserAuthQuery({});

      if (data) {
        setCredentials(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginCallback = useGoogleLogin({
    flow: "auth-code",
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    ux_mode: "redirect",
    onSuccess: handleLoginSuccess,
    onError: (error) => {
      console.log(error);
    },
    onNonOAuthError: (error) => {
      console.log(error);
    },
  });

  return (
    <button
      onClick={() => {
        loginCallback();
        console.log("clicked");
      }}
    >
      Login with Google
    </button>
  );
}
