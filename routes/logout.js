const {Router} = require('express')
const router = Router()




router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth')
    })
})

module.exports = router