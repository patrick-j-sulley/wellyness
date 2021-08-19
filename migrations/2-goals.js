exports.up = function (knex) {
    return knex.schema.createTable('goals', function (table) {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('title')
      table.string('end_date')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('goals')
  }