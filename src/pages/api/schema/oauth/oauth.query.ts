import { prisma } from "../../prisma";
import { builder } from "../../builder";
import { google } from "googleapis";
import jwt, { Secret } from "jsonwebtoken";

const auth = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

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
      scope: t.arg.string({ required: true }),
      authuser: t.arg.string({ required: true }),
      hd: t.arg.string(),
      prompt: t.arg.string({ required: true }),
    },
    resolve: async (query, args, context, info) => {
      try {
        //const { tokens } = await auth.getToken(args.code);

        const userInfo = await google.oauth2("v2").userinfo.get({ auth });
        console.log(userInfo);
        const accessToken = jwt.sign(
          { name: "mikey" },
          process.env.REFRESH_TOKEN_SECRET as Secret,
          { expiresIn: "30d" }
        );
        const refreshToken = jwt.sign(
          { name: "mikey" },
          process.env.REFRESH_TOKEN_SECRET as Secret,
          { expiresIn: "15s" }
        );
        console.log(accessToken);
        auth.setCredentials({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        return {
          name: userInfo.data.name as string,
          email: userInfo.data.email as string,
          picture: userInfo.data.picture as string,
        };
      } catch (e: any) {
        console.log(e);
        return null;
      }
    },
  }),
}));
