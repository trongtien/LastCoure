
exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.string('user_id').primary()
    table.string('username').notNullable()
    table.string('fire_name').notNullable()
    table.string('password').notNullable()
    table.string('email').notNullable()
    table.string('address').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user')
};
