"use strict";

const { v4: uuidV4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("roles", [
      {
        roleId: uuidV4(),
        role: "CUSTOMER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: uuidV4(),
        role: "VENDOR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: uuidV4(),
        role: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: uuidV4(),
        role: "SUPERADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
