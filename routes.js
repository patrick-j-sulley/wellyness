const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getUsers()
    .then((users) => {
      // console.log(users)
      res.render('users', { users })
    })  
    .catch((err) => res.status(500).send("Error: " + err.message));
  })

  router.get("/user/:id", (req, res) => {
    let id = req.params.id;
    let viewData = {} //initiate object here
    return db
    .viewUserGoals(id)
    .then((goals) => {
      // console.log(goals)
      viewData.goals = goals //add goals to view object on goals key
      db.getUserByID(id)
        .then(user => {
          // console.log(user)
          viewData.user = user //add user data to view object on user key
          console.log(viewData)
          res.render('goal', viewData)  //viewData =  { goals: [], user: {} }
        })
    })
  .catch((err) => res.status(500).send("Oh no! An error: " + err.message));
});

router.get("/add", (req, res) => {
  db.getUsers()
    .then((user) => {
      res.render("addUsers", { user });
    })
    .catch((err) => res.status(500).send("Oh no! An error: " + err.message));
});

router.post("/add", (req, res) => {
  const newUser = req.body;
  console.log(newUser)
  db.addUser(newUser)
    .then((user_id) => {
      res.redirect("user/" + user_id)
    })
    .catch((err) => res.status(500).send("Error: " + err.message));
});



module.exports = router
