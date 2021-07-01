import { opine, serveStatic } from 'https://deno.land/x/opine@1.5.3/mod.ts'
import bundle from './bundle.js'
import render from './render.jsx'

const client = await bundle('./components/client.jsx')
const lazy = await bundle('./components/LazyComponent.jsx')

const app = opine()

app.use(serveStatic("public"))

app.get('/scripts/client.js', (req, res) => {
  const js = client.files['deno:///bundle.js']
  res.type('application/javascript').send(js)
})

app.get('/scripts/LazyComponent.jsx', (req, res) => {
  const js = lazy.files['deno:///bundle.js']
  res.type('application/javascript').send(js)
})

app.get('/', (req, res) => {
  res.type('text/html')
  render(req.url, res)
})

app.listen({ port: 3000 })