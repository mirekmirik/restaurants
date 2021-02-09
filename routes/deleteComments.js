const { Router } = require('express')
const router = Router()
const Comments = require('../models/comments')
const auth = require('../middleware/auth')



router.post('/editcomments/:id', auth, async (req, res) => {
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