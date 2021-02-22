const { Router } = require("express");
const router = Router();
const Restaurants = require("../models/restaurant");
const Comments = require("../models/comments");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const restaurants = await Restaurants.find().sort({ title: 1 }).lean();
  res.render("home.hbs", {
    title: "Рестораны Каменское",
    isHome: true,
    restaurants,
  });
});

router.get("/restaurant/:id", auth, async (req, res) => {
  const restaurants = await Restaurants.findById(req.params.id).lean();
  const comments = await Comments.find({ _restaurantsId: req.params.id })
    .sort({ Date: -1 })
    .lean();
  const commentsCounter = comments.map((el) => el._id);

  try {
    res.render("restaurant-main.hbs", {
      title: `Рестораны | Ресторан ${restaurants.title}`,
      restaurants,
      comments,
      commentsCounter,
    });
  } catch (e) {
    console.log(e);
    res.json({
      error: "something went wrong",
    });
  }
});

module.exports = router;
