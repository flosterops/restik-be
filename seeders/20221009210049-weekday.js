"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Weekdays", [
      {
        name: "Monday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tuesday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wednesday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thursday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Friday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Saturday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sunday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Weekdays", null, {});
  },
};
