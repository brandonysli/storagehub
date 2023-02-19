import { builder } from '../../builder'

builder.prismaObject('User', {
	fields: (t) => ({
		id: t.exposeString('id'),
		name: t.exposeString('name'),
		email: t.exposeString('email'),
		phone: t.exposeString('phone', { nullable: true }),
		storageSession: t.relation('storageSession'),
		packages: t.relation('packages'),
		storages: t.relation('storages'),
		createdAt: t.field({
			type: 'String',
			resolve: (user) => user.createdAt.toString(),
		}),
		modifiedAt: t.field({
			type: 'String',
      resolve: (user) => user.modifiedAt.toString(),
  	})
	})
})


