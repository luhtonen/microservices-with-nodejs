/**
 * Created by luhtonen on 03/08/16.
 */

'use strict';

module.exports = function (options) {
  this.use('seneca-entity');
  this.add({role: 'employee', cmd: 'add'}, (args, done) => {
    this.make('employee').data$(args.data).save$(done);
  });
  this.add({role: 'employee', cmd: 'get'}, (msg, respond) => {
    this.make('employee').load$(msg.id, respond);
  })
};