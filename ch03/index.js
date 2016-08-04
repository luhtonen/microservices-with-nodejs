/**
 * Created by luhtonen on 04/08/16.
 */

'use strict';

const seneca = require('seneca')()
  .use('email')
  .use('sms')
  .use('post');

seneca.listen({port: 3456, host: '127.0.0.1'});
