import figlet from 'figlet'

const server = Bun.serve({
  port: 3000,
  fetch(req): Response {
    const url = new URL(req.url)
    if (url.pathname === '/') {
      const body = figlet.textSync(
        `Hello World! I'm learning bun at ${req.url}`,
      )
      return new Response(body, { status: 200 })
    }
    if (url.pathname === '/about') {
      return new Response('About page', { status: 200 })
    }
    if (url.pathname === '/contact') {
      return new Response('Contact page', { status: 200 })
    }
    if (url.pathname === '/services') {
      return new Response('Services page', { status: 200 })
    }
    if (url.pathname === '/products') {
      return new Response('Products page', { status: 200 })
    }
    if (url.pathname === '/blog') {
      return new Response('Blog page', { status: 200 })
    }
    return new Response('Not Found', { status: 404 })
  },
})
console.log(`Server is running on port ${server.port}!`)
