/**
 * Created by luhtonen on 03/08/16.
 */

'use strict';

module.exports = function (options) {
  const init = {};

  /**
   * Sends on SMS
   */
  init.sendSMS = function (destination, content) {
    // Code to send SMS
  };

  /**
   * Reads the pending list of SMS.
   */
  init.readPendingSMS = function () {
    // Code to receive SMS
    return listOfSMS;
  };

  /**
   * Sends an email
   */
  init.sendEmail = function (subject, content) {
    // code to send email
  };

  /**
   * Gets a list of pending emails.
   */
  init.readPendingEmails = function() {
    // code to read the pending emails
    return listOfEmails;
  };

  /**
   * This code marks an email as read so it does not get
   * fetch again by the readPendingEmails function.
   */
  init.markEmailAsRead = function(messageId) {
    // code to mark a message as read.
  };

  /**
   * This function queues a document to be printed and
   * sent by post.
   */
  init.queuePost = function(document) {
    // code to queue post
  };

  return init;
};