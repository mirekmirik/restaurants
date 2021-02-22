const { Router } = require('express')
const router = Router()
const Restaurants = require('../models/restaurant')
const Comments = require('../models/comments')
const auth = require('../middleware/auth')


router.get('/addRestaurant', auth, (req, res) => {
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

router.post('/addRestaurant', auth, async (req, res) => {
    const {title, value, ...rest} = req.body
    const restaurants = new Restaurants({
       title, value, ...rest
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