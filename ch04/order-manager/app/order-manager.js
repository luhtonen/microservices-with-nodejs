/**
 * Created by luhtonen on 10/08/16.
 */

'use strict';

module.exports = function (options) {
  const seneca = this;

  seneca.add({area: 'orders', action: 'fetch'}, get_order);
  seneca.add({area: 'orders', action: 'delete'}, delete_order);

  function get_order(args, done) {
    const orders = seneca.make('orders');
    orders.list$({id: args.id}, done);
  }

  function delete_order(args, done) {
    const orders = seneca.make('orders');
    orders.remove$({id: args.id}, (err) => {
      done(err, null);
    });
  }
};