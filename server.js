const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const app = express()
const beers = require('./app/routes/beers')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to Beers db!')
})

mongoose.connection.on('error', (err) => {
    console.log('Uh oh ' + err )
})


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our API. Try hitting the /api endpoint'})
})

//middleware

// app.use((req, res, next) => {
//     console.log('Something is hitting me')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('And I dont know if I like it')
//     next()
// })


app.use('/api', router)
router.get('/', (req, res) => {
    res.json({message: 'Great now check out the api/beers endpoint.'})
})

router.use('/beers', beers)
//base/api/beers

const port = process.env.PORT || 8080
app.listen(port)

console.log('listening on port 8080')

