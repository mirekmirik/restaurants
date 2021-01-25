const { Router } = require('express')
const router = Router()


router.get('/restaurants', (req, res) => {
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