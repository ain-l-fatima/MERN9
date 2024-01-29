const productModel = require("../models/productModel");
const { v4: uuidV4 } = require("uuid");

module.exports = {
  addProduct: async (body) => {
    try {
      const productId = uuidV4();
      body.productId = productId;
      const product = await productModel.addProduct(body);

      if (product.error) {
        return {
          error: product.error,
        };
      }

      return {
        response: product.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getProduct: async (userId) => {
    try {
      const product = await productModel.getProduct(userId);

      if (product.error) {
        return {
          error: product.error,
        };
      }

      return {
        response: product.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
