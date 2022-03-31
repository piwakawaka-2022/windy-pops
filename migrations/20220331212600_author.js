exports.up = (knex) => {
  return knex.schema.createTable('authors', (table) => {
    table.string('name')
    table.increments('id').primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('authors')
}
