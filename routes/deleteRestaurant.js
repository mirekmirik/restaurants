const { Router } = require('express')
const router = Router()
const Restaurants = require('../models/restaurant')
const auth = require('../middleware/auth')


router.post('/', auth, async (req, res) => {
    try {
        await Restaurants.findByIdAndDelete(req.body.id).then(() => console.log('Restaurant has been deleted'))
        res.status(200)
        res.redirect('/')
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})




module.exports = router