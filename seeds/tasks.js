exports.seed = knex =>
  knex('tasks').del()
    .then(() =>
      knex('tasks').insert([
        { id: 201, goal_id: 101, title: 'mytask1', status: false }, //Anand-goal1
        { id: 202, goal_id: 101, title: 'mytask2', status: false }, //Anand-goal1
        { id: 203, goal_id: 101, title: 'mytask3', status: false }, //Anand-goal1
        { id: 204, goal_id: 101, title: 'mytask4', status: false }, //Anand-goal1

        { id: 205, goal_id: 102, title: 'mytask1', status: false }, //Anand-goal2
        { id: 206, goal_id: 102, title: 'mytask2', status: false }, //Anand-goal2
        { id: 207, goal_id: 102, title: 'mytask3', status: false }, //Anand-goal2
        { id: 208, goal_id: 102, title: 'mytask4', status: false }, //Anand-goal2

        { id: 209, goal_id: 103, title: 'mytask1', status: false }, //Anand-goal3
        { id: 210, goal_id: 103, title: 'mytask2', status: false }, //Anand-goal3
        { id: 211, goal_id: 103, title: 'mytask3', status: false }, //Anand-goal3
        { id: 212, goal_id: 103, title: 'mytask4', status: false }, //Anand-goal3

        { id: 213, goal_id: 104, title: 'mytask1', status: false }, //Juliet-goal1
        { id: 214, goal_id: 104, title: 'mytask2', status: false }, //Juliet-goal1
        { id: 215, goal_id: 104, title: 'mytask3', status: false }, //Juliet-goal1
        { id: 216, goal_id: 104, title: 'mytask4', status: false }, //Juliet-goal1

        { id: 217, goal_id: 105, title: 'mytask1', status: false }, //Juliet-goal2
        { id: 218, goal_id: 105, title: 'mytask2', status: false }, //Juliet-goal2
        { id: 219, goal_id: 105, title: 'mytask3', status: false }, //Juliet-goal2
        { id: 220, goal_id: 105, title: 'mytask4', status: false }, //Juliet-goal2

        { id: 221, goal_id: 106, title: 'mytask1', status: false }, //Juliet-goal3
        { id: 222, goal_id: 106, title: 'mytask2', status: false }, //Juliet-goal3
        { id: 223, goal_id: 106, title: 'mytask3', status: false }, //Juliet-goal3
        { id: 224, goal_id: 106, title: 'mytask4', status: false }, //Juliet-goal3

        { id: 225, goal_id: 107, title: 'mytask1', status: false }, //Patrick-goal1
        { id: 226, goal_id: 107, title: 'mytask2', status: false }, //Patrick-goal1
        { id: 227, goal_id: 107, title: 'mytask3', status: false }, //Patrick-goal1
        { id: 228, goal_id: 107, title: 'mytask4', status: false }, //Patrick-goal1

        { id: 229, goal_id: 108, title: 'mytask1', status: false }, //Patrick-goal2
        { id: 230, goal_id: 108, title: 'mytask2', status: false }, //Patrick-goal2
        { id: 231, goal_id: 108, title: 'mytask3', status: false }, //Patrick-goal2
        { id: 232, goal_id: 108, title: 'mytask4', status: false }, //Patrick-goal2

        { id: 233, goal_id: 109, title: 'mytask1', status: false }, //Patrick-goal3
        { id: 234, goal_id: 109, title: 'mytask2', status: false }, //Patrick-goal3
        { id: 235, goal_id: 109, title: 'mytask3', status: false }, //Patrick-goal3
        { id: 236, goal_id: 109, title: 'mytask4', status: false }, //Patrick-goal3

        { id: 237, goal_id: 110, title: 'Eat vegetables', status: false }, //Phill
        { id: 238, goal_id: 110, title: 'Exercise', status: false }, //Phill
        { id: 239, goal_id: 110, title: 'Take regular breaks from the computer', status: false }, //Phill
        { id: 240, goal_id: 110, title: 'Get some fresh air & sunshine', status: false }, //Phill
        
        { id: 241, goal_id: 111, title: 'Meditate', status: false }, //Phill
        { id: 242, goal_id: 111, title: 'Check in with friends and family', status: false }, //Phill
        { id: 243, goal_id: 111, title: 'Get 8 hours of sleep', status: false }, //Phill
        { id: 244, goal_id: 111, title: 'Reflect on todays successes', status: false }, //Phill
        
        { id: 245, goal_id: 112, title: 'Attend every lecture', status: false }, //Phill
        { id: 246, goal_id: 112, title: 'Review today\'s work', status: false }, //Phill
        { id: 247, goal_id: 112, title: 'Work with a peer', status: false }, //Phill
        { id: 248, goal_id: 112, title: 'Ask if something isn\'t understood', status: false }, //Phill
        
      ]))