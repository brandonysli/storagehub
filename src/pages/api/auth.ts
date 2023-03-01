import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/apollo/client";
import { gql } from "@apollo/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code, scope, authuser, hd, prompt } = req.query;

  const params = {
    code: code as string,
    hd: hd as string,
  };

  console.log("before go to query");

  const { data } = await client.query({
    query: gql`
      query UserAuth($code: String!) {
        UserAuth(code: $code) {
          name
          email
          picture
        }
      }
    `,
    variables: {
      code: params.code,
      hd: params.hd,
    },
  });

  res.redirect("/");
}
