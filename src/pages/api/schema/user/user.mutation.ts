import { builder } from "../../builder"
import { prisma } from "../../prisma"

builder.mutationFields((t) => ({
    CreateOneUser: t.prismaField({
        type: "User",
        nullable: true,
        args: {
            name: t.arg({ type: "String", required: true}),
            email: t.arg({ type: "String", required: true}),
            phone: t.arg({ type: "String"})
        },
        resolve: (mutation, parent, args) => 
            prisma.user.create({
                ...mutation,
                data: {
                    name: args.name,
                    email: args.email,
                    phone: args.phone || undefined
                }
            })
    })
}))