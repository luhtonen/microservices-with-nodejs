/**
 * Created by luhtonen on 02/08/16.
 */

'use strict';

function init(msg, respond) {
  console.log('plugin initialised');
  console.log('expensive operation taking place now... DONE!');
  respond();
}

function math(options) {
  this.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
    respond(null, {answer: msg.left + msg.right});
  });

  this.add({role: 'math', cmd: 'product'}, (msg, respond) => {
    respond(null, {answer: msg.left * msg.right});
  });

  this.add({init: 'math'}, init);
}

require('seneca')()
  .use(math).act('role:math,cmd:sum,left:1,right:2', console.log);
