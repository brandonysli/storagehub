import { builder } from "../../builder"
import { prisma } from "../../prisma"



builder.queryFields((t) => ({
  ManyStorageListing: t.prismaField({
    type: ["StorageListing"],
    nullable: true,
    args: {},
    resolve: (query, root, args) =>
      prisma.storageListing.findMany({
        ...query
      })
  }),

  OneStorageListing:
}))