const sequelize = require("../bin/dbConnection");

const users = require("./definitions/users");
const roles = require("./definitions/roles");
const orders = require("./definitions/orders");
const products = require("./definitions/products");
const carts = require("./definitions/carts");
const productVariations = require("./definitions/productVariations");
const cartItems = require("./definitions/cartItems");
const orderItems = require("./definitions/orderItems");
const sessions = require("./definitions/session");

const models = {
  users,
  roles,
  orders,
  products,
  carts,
  productVariations,
  cartItems,
  orderItems,
  sessions,
};

///relations

//1:1 Relations
//user-cart 1:1
users.hasOne(carts, { foreignKey: "userId" });
carts.belongsTo(users, { foreignKey: "userId" });

//1:M Relations
//user-role 1:M
roles.hasMany(users, { foreignKey: "roleId", onDelete: "CASCADE" });
users.belongsTo(roles, { foreignKey: "roleId", onDelete: "CASCADE" });

//user-session 1:1
users.hasOne(sessions, { foreignKey: "userId" });
sessions.belongsTo(users, { foreignKey: "userId" });

//user-product 1:M
users.hasMany(products, { foreignKey: "userId" });
products.belongsTo(users, { foreignKey: "userId" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
