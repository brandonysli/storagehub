import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
prisma.user.deleteMany()
prisma.storageListing.deleteMany()
prisma.storageSession.deleteMany()
prisma.image.deleteMany()
prisma.package.deleteMany()
prisma.dM_StorageTypes.deleteMany()

const U1 = await prisma.user.create({
  data: {
    name: "U1",
    email: "U1@email.com",
    phone: "123-456-7890"
  }
})

const U2 = await prisma.user.create({
  data: {
    name: "U2",
    email: "U2@email.com",
    phone: "123-456-7890",
  }
})

const ST1 = await prisma.dM_StorageTypes.create({
  data: {
    storageType: "garage"
  }
})



const SL1 = prisma.storageListing.create({
  data: {
    latitude: 1,
    longitude: 2,
    address: "Address",
    description: "Description",
    size: 10,
    storageTypeId: ST1.id,
    userId: U1.id,

  }
})
