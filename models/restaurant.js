const { Schema, model } = require('mongoose')

const restaurantSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    timeWorkMonday: {
        type: String
    },
    timeWorkTuesday: {
        type: String
    },
    timeWorkWednesday: {
        type: String
    },
    timeWorkThursday: {
        type: String
    },
    timeWorkFriday: {
        type: String
    },
    timeWorkSaturday: {
        type: String
    },
    timeWorkSunday: {
        type: String
    },
    dishes: {
        type: String,
    },
    dishes1: {
        type: String,
    },
    dishes2: {
        type: String,
    },
    dishes3: {
        type: String,
    },
    dishes4: {
        type: String,
    },
    dishes5: {
        type: String,
    },
    dishes6: {
        type: String,
    },
    dishes7: {
        type: String,
    },
    dishes8: {
        type: String,
    },
    dishes9: {
        type: String,
    },
    dishes10: {
        type: String,
    },
    img1: {
        type: String,
    },
    img2: {
        type: String,
    },
    img3: {
        type: String
    },
    img4: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    commentsId: { type: Schema.Types.ObjectId, ref: 'Comments' }

})

module.exports = model('Restaurants', restaurantSchema)