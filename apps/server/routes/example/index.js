'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/api', async function (request, reply) {
    return { message: 'Hello, World! ' }
  })
}