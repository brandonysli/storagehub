import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

export const link = createHttpLink({
  uri: "http://localhost:3000/api/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
