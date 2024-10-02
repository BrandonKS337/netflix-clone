import { PrismaClient } from '@prisma/client'

const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prismadb = client

export default client

//This is to avoid maxing out the Prisma clients running each time react rerenders causing it to create new clients
