import { opine, serveStatic } from 'https://deno.land/x/opine@1.5.3/mod.ts'
import bundle from './bundle.js'

const client = await bundle('./components/client.jsx')

const app = opine()

app.use(serveStatic("public"))

app.get('/scripts/client.js', (req, res) => {
  const js = client.files['deno:///bundle.js']
  res.type('application/javascript').send(js)
})

app.listen({ port: 3000 })