exports.seed = knex =>
  knex('users').del()
    .then(() =>
      knex('users').insert([
        { id: 1, name: 'Anand'},
        { id: 2, name: 'Juliet'},
        { id: 3, name: 'Patrick'},
        { id: 4, name: 'Phill'},
      ]))