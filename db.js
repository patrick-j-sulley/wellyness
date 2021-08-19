const config = require("./knexfile").development;
const database = require("knex")(config);

function getUsers(db = database) {
    return db("users").select()
}

function viewUser(id, db=database) {
    return db('users')
    .select()
    .join('users', 'goals.user_id', 'user.id')
    .where('users.id', id)
    .first()
}




module.exports = {
    getUsers,
    viewUser
}                               