import { builder } from "../../builder"
import { prisma } from "../../prisma"

const OneStorageListingWhere = builder.inputType('OneStorageListingWhere', {
  fields: (t) => ({
    ownerId: t.string({ required: true })
  })
})

const ManyStorageListingByTypeWhere = builder.inputType('ManyStorageListingByType', {
  fields: (t) => ({
    storageTypeId: t.string({ required: true })
  })
})

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

  OneStorageListing: t.prismaField({
    type: "StorageListing",
    nullable: true,
    args: {
      where: t.arg({ type: OneStorageListingWhere, required: true})
    },
    resolve: async (query, root, args) =>
      await prisma.storageListing.findFirstOrThrow({
        ...query,
        where: {
          ownerId: args.where?.ownerId
        }
      })
  }),

  ManyStorageListingByType: t.prismaField({
    type: ["StorageListing"],
    nullable: true,
    args: {
      where: t.arg({ type: ManyStorageListingByTypeWhere, required: true })
    },
    resolve: async (query, root, args) =>
      prisma.storageListing.findMany({
        ...query,
        where: {
          storageTypeId: args.where.storageTypeId
        }
      })
  })
}))