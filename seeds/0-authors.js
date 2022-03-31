exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors').insert([
    { id: 1, name: 'Matthew Lincoln' },
    { id: 2, name: 'Samantha Diglet' },
    { id: 3, name: 'Claire Goofy' },
    { id: 4, name: 'Billy Shadow' },
    { id: 5, name: 'Wingrock Fluffy' },
  ])
}
