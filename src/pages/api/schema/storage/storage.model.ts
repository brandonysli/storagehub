import { builder } from '../../builder'

builder.prismaObject('Storage', {
  fields: (t) => ({
      id: t.exposeID('id'),
      image: t.exposeString('image'),
      latitude: t.exposeString('latitude'),
      longitude: t.exposeString('longitude'),
      price: t.exposeInt('price'),
      description: t.exposeString('description'),
      size: t.exposeInt('size'),
      startDate: t.field({
          type: 'String',
          resolve: (table) => table.startDate?.toString()
      }),
      endDate: t.field({
          type: 'String',
          resolve: (table) => table.endDate?.toString()
      }), 
      accessType: t.exposeString('accessType'),
      storageHost: t.relation('storageHost', { nullable: true }), 
      storageHostId: t.exposeID('storageHostId', { nullable: true }),
      user: t.relation('User', { nullable: true }),
      userId: t.exposeString('userId', { nullable: true})
  })
})