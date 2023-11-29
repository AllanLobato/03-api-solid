import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@rocketseat.com.br',
  },
})

// fastify é um framework para criação de aplicações web, que é baseado em plugins e decorators.
