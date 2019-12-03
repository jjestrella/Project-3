// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const router = require("express").Router();
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const axios = require("axios");




// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedData = require("../config/middleware/isAuthenticatedData");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json({
    email: req.user.email,
    id: req.user.id,
    spending_cash: req.user.spending_cash
  })
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    spending_cash: 20000
  })
    .then(function () {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

const apiKey  = `CMC_PRO_API_KEY=${process.env.CMC_PRO_API_KEY}`;

router.get("/api/crypto", function (req, res) {
    return axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?" + apiKey, {params: {
        start: '1',
        limit: '10',
        convert: 'USD'
    }}).then(({data}) => res.json(data)).catch(err => res.status(500).send);
});

router.post("/api/crypto", isAuthenticatedData, function (req, res) {
  console.log(req.body);
  db.boughtCrypto.create({
    crypto: req.body.crypto,
    quantity: req.body.quantity,
    UserId: req.user.id
  })
    .then(function (dbCrypto) {
      res.json(dbCrypto);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});

// Route for logging user out
router.post("/api/logout", function (req, res) {
  req.logout();
  res.json({});
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
      spending_cash: req.user.spending_cash
    });
  }
});

router.get("/api/portfoliohome", isAuthenticatedData, function (req, res) {
  db.Candle.findAll({
    where: {
      UserId: req.user.id
    }
  })
    .then(function (dbCandles) {
      res.json(dbCandles);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});
router.post("/api/portfoliohome", isAuthenticatedData, function (req, res) {
  db.Candle.create({
    name: req.body.name,
    scent: req.body.scent,
    height: req.body.height,
    UserId: req.user.id
  })
    .then(function (dbCandle) {
      res.json(dbCandle);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});

module.exports = router;