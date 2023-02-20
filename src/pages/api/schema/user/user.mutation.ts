import { builder } from "../../builder"
import { prisma } from "../../prisma"

const UpdateOneUserWhere = builder.inputType('UpdateOneUserWhere', {
  fields: (t) => ({
    id: t.string({required: true})
  })
})

const UpdateOneUserData = builder.inputType('UpdateOneUserData', {
  fields: (t) => ({
    name: t.string(),
    email: t.string(),
    phone: t.string() 
  })
})

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
    }),

    UpdateOneUser: t.prismaField({
      type: "User",
      nullable: true,
      args: {
        where: t.arg({ type: UpdateOneUserWhere, required: true }),
        data: t.arg({ type: UpdateOneUserData, required: true })
      },
      resolve: (mutation, parent, args) => 
        prisma.user.update({
          ...mutation,
            where: {
              id: args.where.id
            },
            data: {
              name: args.data?.name ?? undefined,
              email: args.data?.email ?? undefined,
              phone: args.data?.phone ?? undefined
            }
        })
    })
}))