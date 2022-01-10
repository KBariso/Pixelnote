'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Notebooks', [
     {
      userId: 1,
      title: 'AppAcademy',
      createdAt: new Date(),
      updatedAt: new Date()
   },
    {
      userId: 1,
      title: 'Redux',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: 'Sequelize Cheatsheet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: 'Database Notes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      title: 'CSS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      title: 'HTML Notes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      title: 'React',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
