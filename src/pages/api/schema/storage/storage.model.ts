import { builder } from '../../builder'

builder.prismaObject('StorageListing', {
  fields: (t) => ({
    id: t.exposeString('id'),
    image: t.relation('image'),
    storageSessions: t.relation('storageSessions'),
    latitude: t.exposeFloat('latitude'),
    longitude: t.exposeFloat('longitude'),
    address: t.exposeString('address'),
    description: t.exposeString('description'),
    size: t.exposeInt('size'),
    storageType: t.relation('storageType'),
    storageTypeId: t.exposeString('storageTypeId'),
    owner: t.relation('owner'),
    ownerId: t.exposeString('ownerId'),
    createdAt: t.field({
      type: 'String',
      resolve: (StorageHost) => StorageHost.createdAt.toString()
    }),
    modifiedAt: t.field({
      type: 'String',
      nullable: true,
      resolve: (StorageHost) => StorageHost.modifiedAt?.toString()
    }),
    deletedAt: t.field({
      type: 'String',
      nullable: true,
      resolve: (StorageHost) => StorageHost.deletedAt?.toString()
    })
  })
})

builder.prismaObject('StorageSession', {
  fields: (t) => ({
    id: t.exposeString('id'),
    storageListing: t.relation('storageListing'),
    storageListingId: t.exposeString('storageListingId', { nullable: true }),
    user: t.relation('user'),
    userId: t.exposeString('userId'),
    packages: t.relation('packages'),
    priceCents: t.exposeInt('priceCents'),
    startDate: t.field({
      type: 'String',
      resolve: (StorageSession) => StorageSession.startDate.toString()
    }),
    endDate: t.field({
      type: 'String',
      resolve: (StorageSession) => StorageSession.endDate.toString()
    }),
    createdAt: t.field({
      type: 'String',
      resolve: (StorageSession) => StorageSession.createdAt.toString()
    }),
    modifiedAt: t.field({
      type: 'String',
      nullable: true,
      resolve: (StorageSession) => StorageSession.modifiedAt?.toString()
    }),
    deletedAt: t.field({
      type: 'String',
      nullable: true,
      resolve: (StorageSession) => StorageSession.deletedAt?.toString()
    })
  })
})

builder.prismaObject('DM_StorageTypes', {
  fields: (t) => ({
    id: t.exposeString('id'),
    storageType: t.exposeString('storageType'),
    storageListing: t.relation('storageListing'),
    createdAt: t.field({
      type: 'String',
      resolve: (DM_StorageTypes) => DM_StorageTypes.createdAt.toString()
    }),
    modifiedAt: t.field({
      type: 'String',
      nullable: true,
      resolve: (DM_StorageTypes) => DM_StorageTypes.modifiedAt?.toString()
    }),
    deletedAt: t.field({
      type: 'String',
      nullable: true,
      resolve: (DM_StorageTypes) => DM_StorageTypes.deletedAt?.toString()
    })
  })
})

