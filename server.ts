import type { Server } from 'bun'
import figlet from 'figlet'

const server: Server = Bun.serve({
  port: 3000,
  fetch(req): Response {
    const body = figlet.textSync(`Hello World! I'm learning bun at ${req.url}`)
    return new Response(body)
  },
})
console.log(`Server is running on port ${server.port}!`)
