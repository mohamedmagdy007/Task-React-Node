require('./db_connection')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require("cors")
const port = 8000
const userRouter = require('./routers/users')

app.use(express.json())
app.use("/images", express.static("images"));
app.use(express.static("build"));
app.use(cors())
app.use(express.urlencoded())
app.use(userRouter)

app.use(morgan('dev'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
