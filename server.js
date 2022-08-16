const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')
const userRouter = require('./routers/User.router')
const bookRouter = require('./routers/Book.router')
const app = express()
const PORT = process.env.PORT || 3333

database.connect()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello world.')
})

app.use('/users',userRouter )
app.use('/books',bookRouter)

app.listen(PORT,() => {
  console.log(`App running at http://localhost:${PORT}`);
})
