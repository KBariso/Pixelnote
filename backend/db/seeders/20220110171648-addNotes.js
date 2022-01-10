"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "Specific Cohort Dates",
          userId: 1,
          notebookId: 1,
          content:
            "New Year's Day 1/1/2021 Martin Luther King Jr. Day 1/18/2021 Memorial Day 5/31/2021 Independence Day 7/5/2021 Labor Day 9/6/2021 Thanksgiving 11/24/2021 - 11/27/2021 Winter Break 12/20/2021 - 12/24/2021",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Thunk Actions",
          userId: 1,
          notebookId: 2,
          content:
            "A regular POJO action creator is a function that returns a POJO (Plain-Old JavaScript Object) with a type key. A thunk action creator is a function that returns a thunk function. A thunk function is a function that is invoked by the thunk middleware and gets passed the dispatch and getState store methods.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Refactoring Class Components",
          userId: 1,
          notebookId: 2,
          content:
            "Recognize a React Class Component -Convert the use of component props in a Class Component to a Function Component -Convert the use of component state in a Class Component to a Function Component using useState -Understand what lifecycle methods are, the types of lifecycle methods, and when they are called when a Class Component is rendered -Convert the use of lifecycle methods in a Class Component to a Function Component using useEffect",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Sequelize commands",
          userId: 1,
          notebookId: 3,
          content:
            "Command Line Sequelize provides utilities for generating migrations, models, and seed files. They are exposed through the sequelize-cli command. Init Project $ npx sequelize-cli init You must create a database user, and update the config/config.json file to match your database settings to complete the initialization process. Create Database npx sequelize-cli db:create Generate a model and its migration npx sequelize-cli model:generate --name <ModelName> --attributes <column1>: <type>,<column2>:<type>,... Run pending migrations npx sequelize-cli db:migrate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "From boardgames demo",
          userId: 1,
          notebookId: 4,
          content:
            "Or we can run the SQL file: psql -d boardgame_db < code.sql (we'll use this every time if we want to run the file itself) if we try to run the command again, it will tell us it already exists If we want to prevent the error message then: we would create a if statement inside of the file: DROP TABLE IF EXISTS boardgames;",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Simple CSS",
          userId: 2,
          notebookId: 5,
          content:
            "Pseudo -classes active: applies to elements like buttons when activated by a person, like when they push down on the button checked: applies to radio inputs, checkbox inputs, and options in drop downs when the user has toggled it into an on sta disabled: applies to any disabled element, like a disabled button or input first-child: applies to the first element among a group of sibling elements",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "HTML examples",
          userId: 2,
          notebookId: 6,
          content:
            "Different HTML elements <head></head> <body></body> <p></p> <div></div>    to provide extra structure to document without adding extra space <button></button> <form action = '   '></form>  Usually formed around buttons, etc<input type  '    '></input> ex. 'text' 'color' etc<style></style>",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "React Basics Objectives",
          userId: 2,
          notebookId: 7,
          content:
            "React is a powerful, modern front-end framework primarily used to create single-page applications. Not only will learning this framework give you a marketable skill, it will also serve as a foundation for you to learn other front-end frameworks, such as Angular, or Vue, on your own.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
