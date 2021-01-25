const { Router } = require('express')
const router = Router()
const Restaurants = require('../models/restaurant')
const Comments = require('../models/comments')



// async function podschet(req, res, next) {
//     const mm = []
//     const comments = await Comments.findOne({ _restaurantsId: req.params.id })
//     comments.push(mm)
//     console.log(mm)
// }
// podschet()

router.get('/restaurant/discuss/:id', async (req, res) => {
    const restaurants = await Restaurants.findById(req.params.id).lean()
    const comments = await Comments.find({ _restaurantsId: req.params.id }).sort({ Date: -1 }).lean()


    const commentsCounter = comments.map(el => el._id)

    try {
        res.render('discuss', {
            title: `Дисскусия к ${restaurants.title}`,
            restaurants,
            comments,
            commentsCounter
        })
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})

router.post('/discuss/:id', async (req, res) => {
    const restaurants = await Restaurants.findById(req.params.id).lean()
    const comments = new Comments({
        nameComments: req.body.nameComments,
        descComments: req.body.descComments,
        _restaurantsId: restaurants._id
    })
    try {
        comments.save()
        res.redirect('back')
        // console.log(comments)
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})


module.exports = router