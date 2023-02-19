import { idText } from 'typescript'
import { builder } from '../../builder'
import { prisma } from '../../prisma'

builder.queryFields((t) => ({
  ManyUser: t.prismaField({
    type: ["User"],
    nullable: true,
    args: {},
    resolve: (query, root, args) => 
      prisma.user.findMany({
        ...query
      })
  })

  OneUser: t.prismaField({
    type: "User",
    nullable: true,
    args: {
      id: t.arg({type: "String"})
    },
    resolve: (query, root, args) => 
      prisma.user.findFirst({
        ...query,
        where: {
          id: args.id || undefined,
        }
      })
  })
}))



