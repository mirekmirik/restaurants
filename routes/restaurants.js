const { Router } = require('express')
const router = Router()
const auth = require('../middleware/auth')

router.get('/restaurants', auth, (req, res) => {
    try {
        res.render('restaurants.hbs', {
            title: 'Рестораны | Все рестораны',
            isRestaurants: true
        })
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})

module.exports = router