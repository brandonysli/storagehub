import { builder } from '../../builder'

builder.prismaObject('Package', {
  fields: (t) => ({
    id: t.exposeString('id'),
    storageSession: t.relation('storageSession'),
    storageSessionId: t.exposeString('storageSessionId'),
    user: t.relation('user'),
    userId: t.exposeString('userId'),
    createdAt: t.field({
      type: 'String',
      resolve: (Package) => Package.createdAt.toString()
    }),
    modifiedAt: t.field({
      type: 'String',
      resolve: (Package) => Package.modifiedAt.toString()
    }),
    deletedAt: t.field({
      type: 'String',
      resolve: (Package) => Package.deletedAt.toString()
    })
  })
})

builder.prismaObject('Image', {
  fields: (t) => ({
    id: t.exposeString('id'),
    imageUrl: t.exposeString('imageUrl'),
    storageId: t.exposeString('storageId'),
    storageHost: t.relation('storageHost'),
    createdAt: t.field({
      type: 'String',
      resolve: (Image) => Image.createdAt.toString()
    }),
    modifiedAt: t.field({
      type: 'String',
      resolve: (Image) => Image.modifiedAt.toString()
    }),
    deletedAt: t.field({
      type: 'String',
      resolve: (Image) => Image.deletedAt.toString()
    })
  })
})