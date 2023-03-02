import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

await prisma.storageListing.deleteMany()
await prisma.storageSession.deleteMany()
await prisma.dM_StorageTypes.deleteMany()
await prisma.package.deleteMany()
await prisma.image.deleteMany()
await prisma.user.deleteMany()





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

const SL1 = await prisma.storageListing.create({
  data: {
    latitude: 1,
    longitude: 2,
    address: "Address",
    description: "Description",
    size: 10,
    storageTypeId: ST1.id,
    ownerId: U1.id
  }
})

const SS1 = await prisma.storageSession.create({
  data: {
    storageListingId: SL1.id,
    userId: U1.id,
    priceCents: 100,
    startDate: new Date("2000-01-02T00:00:00.000Z"),
    endDate: new Date("2000-01-03T00:00:00.000Z")
  }
})
