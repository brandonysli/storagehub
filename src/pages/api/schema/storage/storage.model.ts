import { builder } from '../../builder'

builder.prismaObject('StorageHost', {
  fields: (t) => ({
    id: t.exposeString('id'),
    image: t.relation('image'),
    storageSessions: t.relation('storageSessions'),
    latitude: t.exposeFloat('latitude'),
    longitude: t.exposeFloat('longitude'),
    address: t.exposeString('address'),
    priceCents: t.exposeInt('priceCents'),
    description: t.exposeString('description'),
    size: t.exposeInt('size'),
    storageType: t.relation('storageType'),
    storageTypeId: t.exposeString('storageTypeId'),
    storageHost: t.relation('storageHost'),
    userId: t.exposeString('userId'),
    createdAt: t.field({
      type: 'String',
      resolve: (StorageHost) => StorageHost.createdAt.toString()
    }),
    modifiedAt: t.field({
      type: 'String',
      resolve: (StorageHost) => StorageHost.modifiedAt.toString()
    }),
    deletedAt: t.field({
      type: 'String',
      resolve: (StorageHost) => StorageHost.deletedAt.toString()
    })
  }) 
})

builder.prismaObject('StorageSession', {
  fields: (t) => ({
    id: t.exposeString('id'),
    storageHost: t.relation('storageHost'),
    storageHostId: t.exposeString('storageHostId'),
    user: t.exposeString('userId'),
    packages: t.relation('packages'),
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
      resolve: (StorageSession) => StorageSession.modifiedAt.toString()
    }),
    deletedAt: t.field({
      type: 'String',
      resolve: (StorageSession) => StorageSession.deletedAt.toString()
    })
  })
})

builder.prismaObject('DM_StorageTypes', {
  fields: (t) => ({
    id: t.exposeString('id'),
    storageType: t.exposeString('storageType'),
    storageHost: t.relation('storageHost'),
    createdAt: t.field({
      type: 'String',
      resolve: (DM_StorageTypes) => DM_StorageTypes.createdAt.toString()
      }),
    modifiedAt: t.field({
      type: 'String',
      resolve: (DM_StorageTypes) => DM_StorageTypes.modifiedAt.toString()
      }),
    deletedAt: t.field({
      type: 'String',
      resolve: (DM_StorageTypes) => DM_StorageTypes.deletedAt.toString()
    })
  })
})

