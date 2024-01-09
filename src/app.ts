import fastify from 'fastify'
import { appRoutes } from '@/http/routes'

export const app = fastify()

app.register(appRoutes)

// fastify é um framework para criação de aplicações web, que é baseado em plugins e decorators.
