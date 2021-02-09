const { Router } = require('express')
const router = Router()
const Restaurants = require('../models/restaurant')
const auth = require('../middleware/auth')


router.get('/editrestaurant/:id', auth, async (req, res) => {
    const restaurants = await Restaurants.findById(req.params.id).lean()
    try {
        res.render('editRestaurant', {
            title: `Редактировать ${restaurants.title}`,
            restaurants
        })
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }

})


router.post('/editrestaurant', auth, async (req, res) => {
    try {
        await Restaurants.findByIdAndUpdate(req.body.id, req.body)
        res.redirect('/')
    } catch (e) {
        res.json({
            "error": "something went wrong"
        })
        console.log(e)
    }
})




module.exports = router