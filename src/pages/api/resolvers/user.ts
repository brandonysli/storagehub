import { builder } from '../schema'
import { prisma } from '../prisma'

builder.queryFields((t) => ({
    ManyUser: t.prismaField({
        type: "User",
        nullable: true,
        args: {},
        resolve: (query, root, args, ctx) =>{

            return prisma.user.findMany({})

        }
    })
})
)