const { Router } = require('express')
const router = Router()
const Comments = require('../models/comments')
const auth = require('../middleware/auth')

router.get('/editcomments/:id', auth, async (req, res) => {
    const comments = await Comments.findById(req.params.id).lean()
    try {
        res.render('editComments.hbs', {
            title: `Редактировать ${comments.nameComments}`,
            comments
        })
    } catch (e) {
        res.json({
            "error": "something went wrong"
        })
    }
})


router.post('/editcom', auth, async (req, res) => {
    try {
        await Comments.findByIdAndUpdate(req.body.id, req.body)
        return res.redirect('..')
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})


module.exports = router