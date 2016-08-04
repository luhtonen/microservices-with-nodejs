/**
 * Created by luhtonen on 04/08/16.
 */

'use strict';

const seneca = require('seneca')()
  .use('email')
  .use('sms')
  .use('post');

// interact with the existing email service using "seneca"
seneca.listen({port: 3456, host: '127.0.0.1'});

// interact with the new email service using "senecaEmail"
var senecaEmail = require("seneca").client({host: "new-email-service-ip", port: 1932});
