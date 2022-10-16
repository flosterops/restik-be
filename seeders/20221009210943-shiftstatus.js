"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ShiftStatuses", [
      {
        name: "Draft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Approved",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ShiftStatuses", null, {});
  },
};
