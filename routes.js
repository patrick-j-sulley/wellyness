const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getUsers()
    .then((users) => {
      console.log(users)
      res.render('users', { users })
    })  
    .catch((err) => res.status(500).send("Error: " + err.message));
  })

  router.get("/user/:id", (req, res) => {
    let id = req.params.id;
    return db
    .viewUserGoals(id)
    .then((user) => {
      console.log(user)
      res.render('users', user)
    })
  .catch((err) => res.status(500).send("Oh no! An error: " + err.message));
});

module.exports = router