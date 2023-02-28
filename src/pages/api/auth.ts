import { UserAuthDocument } from "./../../gql/graphql";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/apollo/client";
interface AuthQueryParams {
  authuser: string | string[] | undefined;
  code: string | string[] | undefined;
  hd?: string | string[] | undefined;
  prompt: string | string[] | undefined;
  scope: string | string[] | undefined;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code, scope, authuser, hd, prompt } = req.query;

  const params: AuthQueryParams = {
    authuser,
    code,
    hd,
    prompt,
    scope,
  };
  try {
    const { data } = await client.query({
      query: UserAuthDocument,
      variables: {
        authuser: params.authuser,
        code: params.code,
        hd: params.hd,
        prompt: params.prompt,
        scope: params.scope,
      },
    });
    console.log(data);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
