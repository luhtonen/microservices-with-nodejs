/**
 * Created by luhtonen on 04/08/16.
 */

'use strict';

module.exports = function (options) {
  const seneca = this;

  seneca.add({area: "product", action: "fetch"}, list_all_products);
  seneca.add({area: "product", action: "fetch", criteria: "byCategory"}, list_products_by_category);
  seneca.add({area: "product", action: "fetch", criteria: "byId"}, get_product_by_id);
  seneca.add({area: "product", action: "add"}, add_product);
  seneca.add({area: "product", action: "remove"}, remove_product);
  seneca.add({area: "product", action: "edit"}, edit_product);

  /**
   * Fetch the list of all the products.
   */
  function list_all_products (args, done) {
    const products = seneca.make("products");
    products.list$({}, done);
  }

  /**
   * Fetch the list of products by category.
   */
  function list_products_by_category (args, done) {
    const products = seneca.make("products");
    products.list$({category: args.category}, done);
  }

  /**
   * Fetch a product by id.
   */
  function get_product_by_id (args, done) {
    const product = seneca.make("products");
    product.load$(args.id, done);
  }

  /**
   * Adds a product.
   */
  function add_product (args, done) {
    const products = seneca.make("products");
    products.category = args.category;
    products.name = args.name;
    products.description = args.description;
    products.price = args.price;
    products.save$((err, product) => {
      done(err, products.data$(false));
    });
  }

  /**
   * Removes a product by id.
   */
  function remove_product(args, done) {
    const product = seneca.make("products");
    product.remove$(args.id, (err) => {
      done(err, null);
    });
  }

  /**
   * Edits a product fetching it by id first.
   */
  function edit_product (args, done) {
    seneca.act({area: "product", action: "fetch", criteria: "byId", id: args.id}, (err, result) => {
      result.data$(
        {
          name: args.name,
          category: args.category,
          description: args.description,
          price: args.price
        }
      );
      result.save$((err, product) => {
        done(product.data$(false));
      });
    });
  }
};
