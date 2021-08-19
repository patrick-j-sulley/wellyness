const config = require("./knexfile").development;
const database = require("knex")(config);

function getUsers(db = database) {
    return db("users").select()
}




module.exports = {
    getUsers,
    viewUser
}