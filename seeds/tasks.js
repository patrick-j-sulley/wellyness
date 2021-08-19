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

        { id: 213, goal_id: 104, title: 'Go outside and get some fresh air and light. ', status: false }, //Juliet-goal1
        { id: 214, goal_id: 104, title: 'Brush teeth morning and night.', status: false }, //Juliet-goal1
        { id: 215, goal_id: 104, title: 'Get some screen free time', status: false }, //Juliet-goal1
        { id: 216, goal_id: 104, title: 'Do one thing to get my heart rate up', status: false }, //Juliet-goal1

        { id: 217, goal_id: 105, title: 'Reach out to a human outside my home', status: false }, //Juliet-goal2
        { id: 218, goal_id: 105, title: 'Tend to something growing/living', status: false }, //Juliet-goal2
        { id: 219, goal_id: 105, title: 'Find stillness', status: false }, //Juliet-goal2
        { id: 220, goal_id: 105, title: 'Think of 5 things I’m grateful for today', status: false }, //Juliet-goal2

        { id: 221, goal_id: 106, title: 'A sound or song', status: false }, //Juliet-goal3
        { id: 222, goal_id: 106, title: 'A sensory feeling', status: false }, //Juliet-goal3
        { id: 223, goal_id: 106, title: 'Something I see', status: false }, //Juliet-goal3
        { id: 224, goal_id: 106, title: 'A meditation practice', status: false }, //Juliet-goal3

        { id: 225, goal_id: 107, title: 'Research healthy recipes', status: false }, //Patrick-goal1
        { id: 226, goal_id: 107, title: 'Write shopping list', status: false }, //Patrick-goal1
        { id: 227, goal_id: 107, title: 'mytaGo to supermarket', status: false }, //Patrick-goal1
        { id: 228, goal_id: 107, title: 'Meal prep for the week on Sunday', status: false }, //Patrick-goal1

        { id: 229, goal_id: 108, title: 'Write reflections in journal twice a day', status: false }, //Patrick-goal2
        { id: 230, goal_id: 108, title: 'Ask for feedback when possible', status: false }, //Patrick-goal2
        { id: 231, goal_id: 108, title: 'Maintain an open mind when receiving feedback', status: false }, //Patrick-goal2
        { id: 232, goal_id: 108, title: 'Apply changes from feedback', status: false }, //Patrick-goal2

        { id: 233, goal_id: 109, title: 'Practice routing', status: false }, //Patrick-goal3
        { id: 234, goal_id: 109, title: 'Resolve SQLite not working', status: false }, //Patrick-goal3
        { id: 235, goal_id: 109, title: 'Research deploying a database driven web app to Heroku', status: false }, //Patrick-goal3
        { id: 236, goal_id: 109, title: 'Practice database testing', status: false }, //Patrick-goal3

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