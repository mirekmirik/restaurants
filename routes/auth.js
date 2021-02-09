const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");


router.get("/auth", (req, res) => {
  res.render("auth", {
    title: "Авторизация",
  });
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const candidate = await User.findOne({ email });
    if (candidate) {
      const areSame = await bcrypt.compare(password, candidate.password);
      if (areSame) {
        const user = candidate;
        req.session.user = user;
         req.session.isAuthenticated = true;
         req.session.save((err) => {
           if (err) {
             throw err;
           }
           res.redirect("/");
         })
      } else {
        res.json({ message: "Неверный пароль" });
      }
    } else {
      res.json({
        message: "Такого email не существует",
      });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.rpassword;
  const email = req.body.remail;

  try {
    const candidate = await User.findOne({ email });
    if (candidate) {
      res.json({
        message: "Sorry this email have already taken",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashPassword,
      email,
    });
    await user.save(() => console.log("saved to database"));
    res.redirect('/auth')

    console.log(user);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
