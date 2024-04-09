// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: {
    model: Category,
    unique: false,
  },
  as: "product_categories",
});

Product.belongsToMany(Tag, {
  through: {
    model: "ProductTag",
    unique: false,
  },
  as: "product_tag",
});

Tag.belongsToMany(Product, {
  through: {
    model: "ProductTag",
    unique: false,
  },
  as: "tag_product",
});
// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
