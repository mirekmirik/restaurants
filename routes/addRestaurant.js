const { Router } = require('express')
const router = Router()
const Restaurants = require('../models/restaurant')
const Comments = require('../models/comments')

router.get('/addRestaurant', (req, res) => {
    try {
        res.render('addRestaurant', {
            title: 'Рестораны | Добавить ресторан',
            isAddRestaurant: true
        })
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})

router.post('/addRestaurant', async (req, res) => {
    const {
        title, value, img, desc,
        timeWorkMonday, timeWorkTuesday, timeWorkWednesday, timeWorkThursday,
        timeWorkFriday, timeWorkSaturday, timeWorkSunday,
        dishes, dishes1, dishes2, dishes3, dishes4,
        dishes5, dishes6, dishes7, dishes8, dishes9, dishes10,
        img1, img2, img3, img4,
        type
    } = req.body
    const restaurants = new Restaurants({
        title,
        value,
        img,
        desc,
        timeWorkMonday,
        timeWorkTuesday,
        timeWorkWednesday,
        timeWorkThursday,
        timeWorkFriday,
        timeWorkSaturday,
        timeWorkSunday,
        dishes,
        dishes1,
        dishes2,
        dishes3,
        dishes4,
        dishes5,
        dishes6,
        dishes7,
        dishes8,
        dishes9,
        dishes10,
        img1,
        img2,
        img3,
        img4,
        type,
    })
    try {
        await restaurants.save().then(() => console.log('Ресторан успешно добавлен'))
        res.redirect('/')
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})


module.exports = router