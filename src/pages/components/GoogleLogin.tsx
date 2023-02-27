import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

import { UserInfo, useUserAuthQuery } from "../../gql/graphql";

export default function GoogleLogin() {
  const [credentials, setCredentials] = useState({});

  console.log(credentials);
  const loginCallback = useGoogleLogin({
    flow: "auth-code",
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    ux_mode: "redirect",
    onSuccess: async (codeResponse) => {
      const { loading, error, data } = await useUserAuthQuery({});
      if (data) {
        setCredentials(data);
      }
      console.log(codeResponse);
    },
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
