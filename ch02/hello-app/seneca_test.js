/**
 * Created by luhtonen on 02/08/16.
 */

'use strict';
const seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
  const sum = msg.left + msg.right;
  respond(null, {answer: sum});
});

seneca.add({role: 'math', cmd: 'product'}, (msg, respond) => {
  const product = msg.left * msg.right;
  respond(null, {answer: product});
});

seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, console.log);
seneca.act({role: 'math', cmd: 'product', left: 3, right: 4}, console.log);
seneca.act({role: 'math', cmd: 'sum', left: 5, right: 6}, (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
