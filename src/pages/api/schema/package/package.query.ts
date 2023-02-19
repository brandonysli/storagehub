import { builder } from "../../builder"
import { prisma } from '../../prisma'

builder.queryFields((t) => ({
    ManyPackage: t.prismaField({
        type: ["Package"],
        nullable: true,
        args: {},
        resolve: (query) => 
        prisma.package.findMany({
            ...query
        })
    }),

    OnePackage: t.prismaField({
        type : "Package",
        nullable: true,
        args: {
            id: t.arg({ type: "String"})
        },
        resolve: (query, root, args) => 
            prisma.package.findFirst({
            ...query,
            where: {
                id: args.id || undefined, 
            }

        })
    })
})
)