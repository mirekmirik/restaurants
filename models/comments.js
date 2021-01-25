const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')
const moment = require('moment')

const time = moment().format('MMMM Do YYYY, h:mm:ss a');

const commentsSchema = new Schema({
    nameComments: {
        type: String,
        required: true
    },
    descComments: {
        type: String,
        required: true
    },
    _restaurantsId: { type: String, ref: 'Restaurants' },
    Date: {
        type: String,
        required: true,
        default: time
    }
})

module.exports = model('Comments', commentsSchema)