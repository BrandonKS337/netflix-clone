import { PrismaClient } from "@prisma/client"

declare global {
    namespace globalThis {
        namespace globalThis {
            var prismadb: PrismaClient
        }
    }
}