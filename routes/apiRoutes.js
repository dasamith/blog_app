const router = require("express").Router();
const db = require("../models");

router.get("/recipes", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Recipe.find({
    title: { $regex: new RegExp(req.query.q, 'i') }
  })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});


router.post('/register', function (req, res) {
  db.User.create(req.body).then(function (dataObj) {
    res.json(dataObj)
  })
})
router.post('/login', function (req, res) {
  console.log("heres the req body")
  console.log(req.body)
  db.User.find({ username: req.body.username }).then(function (userObj) {
    console.log('user obj')
    console.log(userObj)
    if (userObj[0].password === req.body.password) {
      res.json(userObj)
    } else {
      res.json({ success: false, msg: "incorrect username or password" })
    }
  })
})




module.exports = router;
