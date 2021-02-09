const { Router } = require('express')
const router = Router()

router.get('/about', (req, res) => {
    try {
        res.render('about.hbs', {
            title: 'Рестораны | О нас',
            isAbout: true
        })
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})

module.exports = router