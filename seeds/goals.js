exports.seed = knex =>
  knex('goals').del()
    .then(() =>
      knex('goals').insert([
        { id: 101, user_id: 1, title: 'myGoal1', end_date: '25/08/2021' }, //Anand
        { id: 102, user_id: 1, title: 'myGoal2', end_date: '25/08/2021' }, //Anand
        { id: 103, user_id: 1, title: 'myGoal3', end_date: '25/08/2021' }, //Anand
        { id: 104, user_id: 2, title: 'Look after my body', end_date: '25/08/2021' }, //Juliet
        { id: 105, user_id: 2, title: 'Care for my mind', end_date: '25/08/2021' }, //Juliet
        { id: 106, user_id: 2, title: 'Be mindfully present to:', end_date: '25/08/2021' }, //Juliet
        { id: 107, user_id: 3, title: 'Maintain good nutrition intake', end_date: '25/08/2021' }, //Patrick
        { id: 108, user_id: 3, title: 'Work on reflective learning', end_date: '25/08/2021' }, //Patrick
        { id: 109, user_id: 3, title: 'Prepare for group project', end_date: '25/08/2021' }, //Patrick
        { id: 110, user_id: 4, title: 'Take care of my physical health', end_date: '25/08/2021' }, //Phill
        { id: 111, user_id: 4, title: 'Take care of my mental health', end_date: '25/08/2021' }, //Phill
        { id: 112, user_id: 4, title: 'Succeed at EDA', end_date: '25/08/2021' }, //Phill
      ]))