'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const startups = [
      {
        name: 'Gojek',
        business: 'Startup all transportation service',
        bornYear: '2016-07-08',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grab',
        business: 'Startup all transportation service',
        bornYear: '2016-05-08',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tokopedia',
        business: 'Selling product service',
        bornYear: '2016-06-08',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    return queryInterface.bulkInsert('Startups', startups, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Startups', startups, {});
  }
};
