const { models } = require("./index");

module.exports = {
  addProduct: async (body) => {
    try {
      const product = await models.products.create({
        ...body,
      });

      return {
        response: product,
      };
    } catch (error) {
      console.log("error ", error);
      return {
        error: error,
      };
    }
  },

  getProduct: async (userId) => {
    try {
      const product = await models.products.findAll({
        where: {
          userId: userId,
        },
      });

      return {
        response: product,
      };
    } catch (error) {
      console.log("error ", error);
      return {
        error: error,
      };
    }
  },
};
