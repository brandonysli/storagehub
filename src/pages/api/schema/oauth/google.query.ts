import { prisma } from "../../prisma";
import { builder } from "../../builder";
import { google } from "googleapis";

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
  UserAuth: t.prismaField({
    type: "User",
    nullable: true,
    resolve: async (query, root, args, context) => {
      try {
        console.log("auth", auth);
        const { tokens } = await auth.getToken(context.req.body.code);
        console.log("tokens", tokens);

        console.log(context.req.body.code, tokens);
        auth.setCredentials(tokens);
        const userInfo = await google.oauth2("v2").userinfo.get({ auth });
        console.log("userInfo", userInfo);
        const user = await prisma.user.create({
          data: {
            name: userInfo.data.name as string,
            email: userInfo.data.email as string,
          },
        });

        const avatar = await prisma.image.create({
          data: {
            imageUrl: userInfo.data.picture as string,
            userId: user?.id,
          },
        });
        context.res.redirect(200, "/"); // send status 200 back to root
        return [user];
      } catch (e: any) {
        console.log(e);
        return null;
      }
    },
  }),
}));
