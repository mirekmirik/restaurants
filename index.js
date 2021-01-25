require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const path = require('path')
const exhbs = require('express-handlebars')
//routes
const RouteHome = require('./routes/home')
const RouteRestaurants = require('./routes/restaurants')
const RouteAddRestaurant = require('./routes/addRestaurant')
const RouteDeleteRestaurant = require('./routes/deleteRestaurant')
const RouteEditRestaurant = require('./routes/editRestaurant')
const RouteAbout = require('./routes/about')
const RouteDeleteComments = require('./routes/deleteComments')
const RouteDiscuss = require('./routes/discuss')
const RouteEditComments = require('./routes/editComments')
// app.use(fileupload)

const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))



app.use(RouteHome)
app.use(RouteRestaurants)
app.use(RouteAddRestaurant)
app.use(RouteDeleteRestaurant)
app.use(RouteEditRestaurant)
app.use(RouteAbout)
app.use(RouteDeleteComments)
app.use(RouteDiscuss)
app.use(RouteEditComments)


async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
        app.listen(PORT, () => console.log(`Server has been started on PORT ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}
start()



