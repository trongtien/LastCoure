
exports.up = function (knex) {
  return knex.schema.createTable('user_db', (table) => {
    table.string("user_id").primary()
    table.integer("level")
    table.string("avatar")
    table.string("fullname")
    table.string("username")
    table.string("password")
    table.string("email")
    table.integer("phone")
    table.string("address")
    table.timestamps(true, true)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('user')
};
