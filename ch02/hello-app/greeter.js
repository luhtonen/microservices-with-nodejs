/**
 * Created by luhtonen on 02/08/16.
 */

'use strict';
const seneca = require('seneca')();

seneca.add({component: 'greeter'}, (msg, respond) => {
  respond(null, {message: 'Hello, ' + msg.name});
});
seneca.act({component: 'greeter', name: 'Eduard'}, (error, response) => {
  if (error) { return console.log(error); }
  console.log(response.message);
});