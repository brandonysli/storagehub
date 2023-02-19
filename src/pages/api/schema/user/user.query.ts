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
})
)