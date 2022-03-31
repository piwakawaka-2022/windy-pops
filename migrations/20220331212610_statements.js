exports.up = (knex) => {
  return knex.schema.createTable('statements', (table) => {
    table.boolean('spicy')
    table.string('content')
    table.increments('id').primary()
    table.integer('author_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('statements')
}
