"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Organizations", [
      {
        name: "CoffeeIn",
        hash: "9dca6f3c-cd76-414a-ae2b-1f336dbe6b37",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Organizations", null, {});
  },
};
