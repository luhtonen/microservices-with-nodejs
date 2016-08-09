/**
 * Created by luhtonen on 04/08/16.
 */

'use strict';
const seneca = require('seneca')();
seneca.use('entity');
seneca.use('app/product-management.js');
seneca.use('mongo-store', {
  name: 'seneca',
  host: '127.0.0.1',
  port: '27017'
});

seneca.ready((err) => {
  console.log('starting...');
  seneca.act('role:web', {
    use: {
      prefix: '/products',
      pin: { area: 'product', action: '*' },
      map: {
        fetch: { GET: true },
        edit: { GET: false, POST: true },
        delete: { GET: false, DELETE: true }
      }
    }});
  const express = require('express');
  const app = express();
  app.use(require('body-parser').json());

  // This is how you integrate Seneca with Express
  app.use( seneca.export('web') );

  app.listen(3000);
  console.log('listening on port 3000');
});
