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

//TODO: image typedef
builder.prismaObject('Image', {

})