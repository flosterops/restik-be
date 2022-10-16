"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Specifications", [
      { name: "waiter", createdAt: new Date(), updatedAt: new Date() },
      { name: "barista", createdAt: new Date(), updatedAt: new Date() },
      { name: "barmen", createdAt: new Date(), updatedAt: new Date() },
      { name: "cook", createdAt: new Date(), updatedAt: new Date() },
      { name: "kitchener", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "cleaning manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Specifications", null, {});
  },
};
