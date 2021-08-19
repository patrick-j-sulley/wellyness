exports.seed = knex =>
  knex('goals').del()
    .then(() =>
      knex('goals').insert([
        { id: 101, user_id: 1, title: 'myGoal1', end_date: 25/08/2021 }, //Anand
        { id: 102, user_id: 1, title: 'myGoal2', end_date: 25/08/2021 }, //Anand
        { id: 103, user_id: 1, title: 'myGoal3', end_date: 25/08/2021 }, //Anand
        { id: 104, user_id: 2, title: 'myGoal4', end_date: 25/08/2021 }, //Juliet
        { id: 105, user_id: 2, title: 'myGoal1', end_date: 25/08/2021 }, //Juliet
        { id: 106, user_id: 2, title: 'myGoal2', end_date: 25/08/2021 }, //Juliet
        { id: 107, user_id: 3, title: 'myGoal3', end_date: 25/08/2021 }, //Patrick
        { id: 108, user_id: 3, title: 'myGoal4', end_date: 25/08/2021 }, //Patrick
        { id: 109, user_id: 3, title: 'myGoal1', end_date: 25/08/2021 }, //Patrick
        { id: 110, user_id: 4, title: 'myGoal2', end_date: 25/08/2021 }, //Phill
        { id: 111, user_id: 4, title: 'myGoal3', end_date: 25/08/2021 }, //Phill
        { id: 112, user_id: 4, title: 'myGoal4', end_date: 25/08/2021 }, //Phill
      ]))