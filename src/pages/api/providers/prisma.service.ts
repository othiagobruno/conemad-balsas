import { PrismaClient } from '@prisma/client'

class PrismaServiceHandler extends PrismaClient {}

export const PrismaService = new PrismaServiceHandler()
