"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Locations", [
      {
        name: "Bar 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bar 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kitchen 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kitchen 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hall 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hall 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hall 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
