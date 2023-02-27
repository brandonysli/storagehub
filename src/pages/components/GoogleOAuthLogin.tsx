import { useUserAuthQuery } from "@/gql/graphql";
import { useRouter, NextRouter } from "next/router";

const Login = (router: NextRouter, rootUrl: string, qs: string) => {
  router.push(`${rootUrl}?${qs}`);
};

export default function getGoogleOAuthUrl() {
  const router = useRouter();
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  console.log(process.env.GOOGLE_REDIRECT_URI);
  console.log(qs.toString());

  return (
    <>
      <div>
        <button onClick={() => Login(router, rootUrl, qs.toString())}>
          Google Login
        </button>
      </div>
    </>
  );
}
