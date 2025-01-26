const express = require('express')
const port =process.env.PORT|| 8080
const app = express()
const router= express.Router()


app.use((req, res, next) => {
    next()
})

app.get('/', (req, res) => {
    res.send("Main hoon don")
})

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})
