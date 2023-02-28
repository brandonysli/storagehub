import { prisma } from "../../prisma";
import { builder } from "../../builder";
import jwt, { Secret } from "jsonwebtoken";
import axios from "axios";
import qs from "qs";

interface GoogleTokenResponse {
  access_token: string;
  expires_in: Number;
  refresh_token: string;
  scope: string;
  id_token: string;
}

interface GoogleUserResponse {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}


interface IUserInfo {
  name: string;
  email: string;
  picture: string;
}

const UserInfo = builder.objectRef<IUserInfo>("UserInfo").implement({
  fields: (t) => ({
    name: t.exposeString("name"),
    email: t.exposeString("email"),
    picture: t.exposeString("picture"),
  }),
});

builder.queryFields((t) => ({
  UserAuth: t.field({
    type: UserInfo,
    nullable: true,
    args: {
      code: t.arg.string({ required: true }),
    },
    resolve: async (query, args, context, info) => {

      console.log("here?");
      const tokenUrl = "https://oauth2.googleapis.com/token";

      const tokenValues = {
        code: args.code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
      };

    
      const tokenResponse = await axios.post<GoogleTokenResponse>(
        tokenUrl,
        qs.stringify(tokenValues),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      console.log(tokenResponse.data);

      const userUrl = "https://www.googleapis.com/oauth2/v2/userinfo";

      const userResponse = await axios.get<GoogleUserResponse>(userUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenResponse.data.id_token}`,
        },
        params: { access_token: tokenResponse.data.access_token },
      });

      console.log(userResponse.data);
      
    

      return {
        name: "test",
        email: "test",
        picture: "test",
      };
    },
  }),
}));
