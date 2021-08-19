const config = require("./knexfile").development;
const database = require("knex")(config);

function getUsers(db = database) {
    return db("users").select()
}

function viewUserGoals(id, db=database) {
    return db('users')
    .select()
    .join('users', 'goals.user_id', 'user.id')
    .where('users.id', id)
    .first()
}

function viewUserTasks(goal_id ,db = database) {
    return db('goals')
    .select()
    .join('goals', 'taks.user_id', 'goals.id')
    .where('goal_id', id)
    .first()
}

function addUser(user, db =database) {
    return db('users')
    .insert(user)
}


module.exports = {
    getUsers,
    viewUserGoals,
    viewUserTasks,
    addUser,
}                               