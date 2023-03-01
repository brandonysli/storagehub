import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import WebSocket from "ws";

export const httpLink = createHttpLink({
  uri: "http://localhost:3000/api/graphql",
  credentials: "same-origin",
});

const wsLink =
    typeof window !== "undefined"
        ? new GraphQLWsLink(
                createClient({
                    url: "ws://localhost:30000/subscriptions",
                    on: {
                      connected: () => console.log("connected"),
                      closed: () => console.log("closed")
                    }
                })
          )
        : null;

//Split the link based on graphql operation
const link = wsLink &&
  typeof window !== "undefined"
    ? split(
        //only create the split in the browser
        // split based on operation type
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query) as {kind: string; operation?: string};
          return kind === "OperationDefinition" && operation === "subscription";
        },
        wsLink,
        httpLink
      )
    : httpLink;

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined"
});

export default client;
