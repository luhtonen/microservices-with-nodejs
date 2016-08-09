/**
 * Created by luhtonen on 09/08/16.
 */

'use strict';

module.exports = function (options) {
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'info@micromerce.com',
      pass: 'verysecurepassword'
    }
  });
  const seneca = this;

  seneca.add({area: 'email', action: 'send'}, send_email);

  /**
   * Sends an email including the content.
   */
  function send_email(err, done) {
    console.log(args);
    const mailOptions = {
      from: 'Micromerce Info <info@micromerce.com>',
      to: args.to,
      subject: args.subject,
      html: args.body
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        done({code: e}, null);
      }
      console.log(info);
      done(null, {status: "sent"});
    });
  }
};