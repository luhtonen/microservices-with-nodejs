/**
 * Created by luhtonen on 02/08/16.
 */

'use strict';
const seneca = require('seneca')();

seneca.add('role:api,cmd:bazinga', (args, done) => {
  done(null, {bar: 'Bazinga!'});
});
seneca.act('role:web', {use: {
  prefix: '/my-api',
  pin: {role: 'api', cmd: '*'},

  map: {
    bazinga: {GET: true}
  }
}});
const app = require('express')();
app.use(seneca.export('web'));
app.use( require("body-parser").json());
app.listen(3000);
