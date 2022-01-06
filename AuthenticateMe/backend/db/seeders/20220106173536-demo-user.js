'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@user2.io',
        username: 'Demo-lition2',
        hashedPassword: bcrypt.hashSync('password2'),
      },
      {
        email: 'demo@user3.io',
        username: 'Demo-lition3',
        hashedPassword: bcrypt.hashSync('password3'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Demo-lition2', 'Demo-lition3'] }
    }, {});
  }
};
