exports.seed = knex =>
  knex('goals').del()
    .then(() =>
      knex('tasks').insert([
        { id: 201, goal_id: 101, title: mytask1, status: false }, //Anand
        { id: 202, goal_id: 101, title: mytask2, status: false }, //Anand
        { id: 203, goal_id: 101, title: mytask3, status: false }, //Anand
        { id: 204, goal_id: 101, title: mytask4, status: false }, //Anand

        { id: 205, goal_id: 102, title: mytask1, status: false }, //Anand
        { id: 206, goal_id: 102, title: mytask2, status: false }, //Anand
        { id: 207, goal_id: 102, title: mytask3, status: false }, //Anand
        { id: 208, goal_id: 102, title: mytask4, status: false }, //Anand

        { id: 209, goal_id: 103, title: mytask1, status: false }, //Anand
        { id: 210, goal_id: 103, title: mytask2, status: false }, //Anand
        { id: 211, goal_id: 103, title: mytask3, status: false }, //Anand
        { id: 212, goal_id: 103, title: mytask4, status: false }, //Anand

        { id: 213, goal_id: 104, title: mytask1, status: false }, //Juliet
        { id: 214, goal_id: 104, title: mytask2, status: false }, //Juliet
        { id: 215, goal_id: 104, title: mytask3, status: false }, //Juliet
        { id: 216, goal_id: 104, title: mytask4, status: false }, //Juliet

        { id: 217, goal_id: 105, title: mytask1, status: false }, //Juliet
        { id: 218, goal_id: 105, title: mytask1, status: false }, //Juliet
        { id: 219, goal_id: 105, title: mytask1, status: false }, //Juliet
        { id: 220, goal_id: 105, title: mytask1, status: false }, //Juliet

        { id: 221, goal_id: 106, title: mytask1, status: false }, //Juliet
        { id: 222, goal_id: 106, title: mytask1, status: false }, //Juliet
        { id: 223, goal_id: 106, title: mytask1, status: false }, //Juliet
        { id: 224, goal_id: 106, title: mytask1, status: false }, //Juliet

        { id: 225, goal_id: 107, title: mytask1, status: false }, //Patrick
        { id: 226, goal_id: 107, title: mytask1, status: false }, //Patrick
        { id: 227, goal_id: 107, title: mytask1, status: false }, //Patrick
        { id: 228, goal_id: 107, title: mytask1, status: false }, //Patrick

        { id: 229, goal_id: 108, title: mytask1, status: false }, //Patrick
        { id: 230, goal_id: 108, title: mytask1, status: false }, //Patrick
        { id: 231, goal_id: 108, title: mytask1, status: false }, //Patrick
        { id: 232, goal_id: 108, title: mytask1, status: false }, //Patrick

        { id: 233, goal_id: 109, title: mytask1, status: false }, //Patrick
        { id: 234, goal_id: 109, title: mytask1, status: false }, //Patrick
        { id: 235, goal_id: 109, title: mytask1, status: false }, //Patrick
        { id: 236, goal_id: 109, title: mytask1, status: false }, //Patrick

        { id: 237, goal_id: 110, title: mytask1, status: false }, //Phill
        { id: 238, goal_id: 110, title: mytask1, status: false }, //Phill
        { id: 239, goal_id: 110, title: mytask1, status: false }, //Phill
        { id: 240, goal_id: 110, title: mytask1, status: false }, //Phill
        
        { id: 241, goal_id: 111, title: mytask1, status: false },
        { id: 242, goal_id: 111, title: mytask1, status: false },
        { id: 243, goal_id: 111, title: mytask1, status: false },
        { id: 244, goal_id: 111, title: mytask1, status: false },
        
        { id: 245, goal_id: 112, title: mytask1, status: false },
        { id: 246, goal_id: 112, title: mytask1, status: false },
        { id: 247, goal_id: 112, title: mytask1, status: false },
        { id: 248, goal_id: 112, title: mytask1, status: false },
        




















      ]))