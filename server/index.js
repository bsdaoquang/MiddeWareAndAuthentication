const express = require('express')
const rootRouter = require('./routers/router')
const app = express()
const dbConnect = require('./database/mongoConnection.js')
const cors = require('cors')

app.use(express.json())
app.use(cors({
  origin: '*'
}))
app.use(rootRouter)

const PORT = process.env.PRODUCT || 4000
app.listen(PORT, async () => {
  await dbConnect()
  console.log(`Server stated at http://localhost:${PORT}`)
})
