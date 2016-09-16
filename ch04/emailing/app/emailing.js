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
  seneca.add({area: 'email', action: 'send', nodemailer: true}, send_email_with_nodemailer);

  /**
   * Dry run email sending
   */
  function send_email(args, done) {
    console.log(args);
    done(null, {status: "sent"});
  }

  /**
   * Sends an email including the content with nodemailer module.
   */
  function send_email_with_nodemailer(args, done) {
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