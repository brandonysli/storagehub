import { builder } from '../../builder'
import { prisma } from '../../prisma'

const OneUserWhere = builder.inputType('OneUserInputType', {
  fields: (t) => ({
    id: t.string({ description: 'The id of the user' }),
    name: t.string({ description: 'The name of the user' }),
    email: t.string({ description: 'The email of the user' }),
    phone: t.string({ description: 'The phone number of the user' })
  })
})

builder.queryFields((t) => ({
  ManyUser: t.prismaField({
    type: ["User"],
    nullable: true,
    args: {},
    resolve: async (query, root, args) => 
      await prisma.user.findMany({
        ...query
      })
  }),

  OneUser: t.prismaField({
    type: "User",
    nullable: true,
    args: {
      where: t.arg({type: OneUserWhere})
    },
    resolve: async (query, root, args) => 
      await prisma.user.findFirstOrThrow({
      ...query,
      where: {
        id: args.where?.id ?? undefined,
        name: args.where?.name ?? undefined,
        email: args.where?.email ?? undefined,
        phone: args.where?.phone ?? undefined
      }
    })
  })
}))



