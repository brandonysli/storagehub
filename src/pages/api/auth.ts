import { UserAuthDocument } from "./../../gql/graphql";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/apollo/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code, scope, authuser, hd, prompt } = req.query;

 const params = {
    code: code as string,
    hd: hd as string,
  };

    console.log("before go to query")
    

    const { data } = await client.query({
      query: UserAuthDocument,
      variables: {
        code: params.code,
        hd: params.hd,
      },
    });


    
    res.redirect("/");

}
