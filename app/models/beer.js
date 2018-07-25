const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BeerSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 

    rating: {
        type: Number, 
        min: [0, 'Rating too small.'],
        max: [10, 'Rating too high.'],
        required: true
    }
})

module.exports = mongoose.model('Beer', BeerSchema)