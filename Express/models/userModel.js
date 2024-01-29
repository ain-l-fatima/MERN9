const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
  createUser: async (body, userId) => {
    try {
      const createdUser = await models.users.create({
        userId,
        ...body,
      });
      return {
        response: createdUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getUserByEmail: async (email) => {
    try {
      const user = await models.users.findOne({
        where: {
          email: email,
        },
        include: {
          model: models.roles,
          attributes: ["role"],
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getAllUsers: async (offset, query) => {
    try {
      const users = await models.users.findAll({
        where: [
          {
            ...(query.email
              ? {
                  email: {
                    [Op.substring]: query.email,
                  },
                }
              : true),
          },
          {
            ...(query.firstName
              ? {
                  firstName: {
                    [Op.substring]: query.firstName,
                  },
                }
              : true),
          },
          {
            ...(query.lastName
              ? {
                  lastName: {
                    [Op.substring]: query.lastName,
                  },
                }
              : true),
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
        },
        include: {
          model: models.roles,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
          where: {
            ...(query.role ? { role: query.role } : true),
          },
        },
        order: [[query.sortValue, query.sortOrder]],
        offset: offset,
        limit: query.limit,
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deletesUser: async (userId) => {
    try {
      const user = await models.users.destroy({
        where: {
          userId: userId,
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getRoleByUserId: async (userId) => {
    try {
      const user = await models.users.findOne({
        where: {
          userId: userId,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
        },
        include: {
          model: models.roles,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
