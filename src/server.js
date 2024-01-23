import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
  const {method, url} = req

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')
    .writeHead(200)
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email:'email@email.com'
    })

    return res.writeHead(201).end("Criar usuário")
  }

  return res.writeHead(404).end()
})

server.listen(3333)