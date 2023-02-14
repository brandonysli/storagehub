import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from 'next';

import { builder } from './builder'

// Initialize queries and mutations
builder.queryType({})

// Custom operations on select tables
import "./schema/user/user.model"
import "./schema/user/user.query"

// Build and export the schema
export const schema = builder.toSchema({})

const apolloServer = new ApolloServer({
  schema
});

const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
      "Access-Control-Allow-Origin",
      "https://studio.apollographql.com"
  );
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  if (req.method === "OPTIONS") {
      res.end();
      return false;
  }
  
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};