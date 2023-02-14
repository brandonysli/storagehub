import { builder } from '../schema'

builder.prismaObject('User', {
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        email: t.exposeString('email')
    })
})