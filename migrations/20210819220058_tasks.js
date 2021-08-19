exports.up = function (knex) {
    return knex.schema.createTable('tasks', function (table) {
      table.increments('id').primary()
      table.integer('goal_id')
      table.string('title')
      table.boolean('status')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('tasks')
  }