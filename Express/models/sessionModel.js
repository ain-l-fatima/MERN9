const { models } = require("./index");

module.exports = {
  createSession: async (token, userId, sessionId) => {
    try {
      const session = await models.sessions.create({
        sessionId,
        userId,
        token,
      });
      return {
        response: session,
      };
    } catch (error) {
      console.log("upset error ", error);
      return {
        error: error,
      };
    }
  },

  getSession: async (userId, token) => {
    try {
      const session = await models.sessions.findOne({
        where: {
          userId: userId,
          token: token,
        },
      });
      return {
        response: session,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteSession: async (userId) => {
    try {
      const session = await models.sessions.destroy({
        where: {
          userId: userId,
        },
      });
      return {
        response: session,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
