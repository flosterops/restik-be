"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(queryInterface, "Sequelize");
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Admin",
        lastName: "Admin",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 1,
      },
      {
        firstName: "Manage",
        lastName: "Manage",
        email: "Manage@Manage.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 2,
      },
      {
        firstName: "Employee",
        lastName: "Employee",
        email: "Employee@Employee.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 3,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
