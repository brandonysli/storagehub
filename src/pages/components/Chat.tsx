import client from "../../lib/apollo/client";
import { gql, useSubscription } from "@apollo/client";
import { Container, Chip, Grid, TextField, Button } from "@material-ui/core";


const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      user
      text
    }
  }
`;

interface Message {
  id: number;
  user: string;
  text: string;
}

const Messages = () => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }
  return (
    <div style={{ marginBottom: "5rem" }}>
      {data.messages.map(({ id, user, text }: Message) => {
        return (
          <div key={id} style={{ textAlign: "right" }}>
            <p style={{ marginBottom: "0.3rem" }}>{user}</p>
            <Chip style={{ fontSize: "0.9rem" }} color="primary" label={text} />
          </div>
        );
      })}
    </div>
  );
};

export default function Chat() {
  return (
    <>
      <div>
        <h3>
          Welcome to DevThoughts! A simple chat app for the GraphQL series!
        </h3>
        <Messages />
      </div>
    </>
  );
}
