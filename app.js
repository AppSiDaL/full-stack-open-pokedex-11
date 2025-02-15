const express = require('express')
const app = express()

/* global process */
const PORT = process.env.PORT || 10000


app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 10000')
})
