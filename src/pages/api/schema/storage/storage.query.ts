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
const ManyStorageSessionByUserWhere = builder.inputType('ManyStorageSessionByUser', {
  fields: (t) => ({
    storageSessionUserId: t.string({ required: true })
  })
})

const OneStorageSessionWhere = builder.inputType('OneStorageSessionInputType', {
  fields: (t) => ({
    id: t.string({ description: 'The id of the storage session' }),
    storageListingId: t.string({ description: 'The storage listing id of the storage session' }),
    userId: t.string({ description: 'The userId of the storage session' }),
  })
})

builder.queryFields((t) => ({
  ManyStorageSession: t.prismaField({
    type: ["StorageSession"],
    nullable: true,
    args: {},
    resolve: async (query, root, args) =>
      await prisma.storageSession.findMany({
        ...query
      })
  }),

  ManyStorageSessionByUser: t.prismaField({
    type: ["StorageSession"],
    nullable: true,
    args: {
      where: t.arg({ type: ManyStorageSessionByUserWhere, required: true })
    },
    resolve: async (query, root, args) =>
      await prisma.storageSession.findMany({
        ...query,
        where: {
          userId: args.where?.storageSessionUserId
        }
      })
  }),

  OneStorageSession: t.prismaField({
    type: "StorageSession",
    nullable: true,
    args: {
      where: t.arg({ type: OneStorageSessionWhere })
    },
    resolve: async (query, root, args) =>
      await prisma.storageSession.findFirstOrThrow({
        ...query,
        where: {
          id: args.where?.id ?? undefined,
          storageListingId: args.where?.storageListingId ?? undefined,
          userId: args.where?.userId ?? undefined,
        }
      })
  }),



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
      where: t.arg({ type: OneStorageListingWhere, required: true })
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