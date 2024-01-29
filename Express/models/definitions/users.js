const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");
const carts = require("../definitions/carts");
const { v4: uuidV4 } = require("uuid");

class USERS extends Model {}

USERS.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(90),
    },
    firstName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(34),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    hooks: {
      afterCreate: async (USERS) => {
        await carts.create({
          userId: USERS.dataValues.userId,
          cartId: uuidV4(),
        });
      },
    },
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "users",
  }
);

module.exports = USERS;
