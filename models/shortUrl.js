const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
    full : {
        type: String,
        required:true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate

    },
     note: {
        type: String,
        unique: true,
        sparse: true
    }
})

module.exports = mongoose.model('ShortUrl',shortUrlSchema)
