import { builder } from '../../builder'

builder.prismaObject('User', {
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        email: t.exposeString('email'),
        phone: t.exposeString('phone', { nullable: true }),
        storages: t.relation('storages'),
        storageHost: t.relation('storageHost', { nullable: true }),
        storageHostId: t.exposeID('storageHostId', { nullable: true }) 
    })
})

builder.prismaObject('StorageHost', {
    fields: (t)=> ({
        id: t.exposeID('id'),
        storage: t.relation('storages'),
        clients: t.relation('clients'),
        userId: t.exposeID('userId')
    })
})

