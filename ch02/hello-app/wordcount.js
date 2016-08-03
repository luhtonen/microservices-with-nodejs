/**
 * Created by luhtonen on 02/08/16.
 */

'use strict';
const seneca = require('seneca')();

seneca.add({cmd: 'wordcount'}, (msg, respond) => {
  const length = msg.phrase.split(' ').length;
  respond(null, {words: length});
});

seneca.add({cmd: 'wordcount', skipShort: true}, (msg, respond) => {
  const words = msg.phrase.split(' ');
  let validWords = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      validWords++;
    }
  }
  respond(null, {words: validWords});
});

seneca.act({cmd: 'wordcount', phrase: 'Hello world this is Seneca'}, (err, response) => {
  console.log(response);
});

seneca.act({cmd: 'wordcount', skipShort: true, phrase: 'Hello world this is Seneca'}, (err, response) => {
  console.log(response);
});

seneca.act({cmd: 'wordcount', skipShort: false, phrase: 'Hello world this is Seneca'}, (err, response) => {
  console.log(response);
});
