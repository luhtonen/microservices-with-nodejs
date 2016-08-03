/**
 * Created by luhtonen on 02/08/16.
 */

'use strict';
const seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
  const sum = msg.left + msg.right;
  respond(null, {answer: sum});
});

seneca.add({role: 'math', cmd: 'sum', integer: true}, (msg, respond) => {
  seneca.act({role: 'math', cmd: 'sum', left: Math.floor(msg.left), right: Math.floor(msg.right)}, respond);
});

seneca.act({role: 'math', cmd: 'sum', left: 1.5, right: 2.5}, console.log);
seneca.act({role: 'math', cmd: 'sum', left: 1.5, right: 2.5, integer: true}, console.log);
