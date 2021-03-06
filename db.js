const config = require("./knexfile").development;
const database = require("knex")(config);

function getUsers(db = database) {
    return db("users").select()
}

function getUserByID(id, db = database) {
    return db("users")
    .select()
    .where('id', id)
    .first()
}

function viewUserGoals(id, db=database) {
    return db('users')
    .select()
    .join('goals', 'goals.user_id', 'users.id')
    .where('users.id', id)
    // .first()
}

function viewUserTasks(goal_id ,db = database) {
    return db('tasks')
    .select()
    .join('goals', 'tasks.goal_id', 'goals.id')
    .where('tasks.goal_id', goal_id)
    // .first()
}

function addUser(user, db = database) {
    return db('users')
    .insert(user)
}

function addGoal(goal, db = database) {
    return db('goals')
    .insert(goal)
}

function addTask(task, db = database) {
    return db('tasks')
    .insert(task)
}


module.exports = {
    getUsers,
    viewUserGoals,
    viewUserTasks,
    addUser,
    addGoal,
    addTask,
    getUserByID
}                               