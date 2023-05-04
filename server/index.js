const express = require('express')
const users = require('./datas/user.json')
const rootRouter = require('./routers/router')
const app = express()

app.use(express.json())

app.use(rootRouter)

const PORT = process.env.PRODUCT || 4000
app.listen(PORT, () => console.log(`Server stated at http://localhost:${PORT}`))
