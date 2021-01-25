const { Router } = require('express')
const router = Router()
const Comments = require('../models/comments')




router.post('/editcomments/:id', async (req, res) => {
    try {
        await Comments.findByIdAndDelete(req.body.id).then(() => console.log('Has been deleted'))
        res.redirect('back')
    } catch (e) {
        console.log(e)
        res.json({
            "error": "something went wrong"
        })
    }
})


module.exports = router