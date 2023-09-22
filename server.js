// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//   response.write('oi')

//   return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

// POST http://localhost:3333/videos
// PUT http://localhost:3333/videos/5

server.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body

  database.create({
    title,
    description,
    duration,
  })

  console.log(database.list());

  return reply.status(201).send()
});

server.get('/videos', () => {
  const videos = database.list()

  return videos
});


server.put('/videos/:id', () => {
  return 'Hello Node.js'
});

server.delete('/videos/:id', () => {
  return 'Hello Node.js'
});

server.listen({
  port: 3333,
})