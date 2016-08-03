/**
 * Created by luhtonen on 03/08/16.
 */

'use strict';
const seneca = require('seneca')().use('./employees-storage.js');
const Promise = require('promise');
var employee = {
  name: "Eduard",
  surname: "Luhtonen",
  position: "Software Developer"
};

function add_employee() {
  return new Promise((resolve, reject) => {
    seneca.act({role: 'employee', cmd: 'add', data: employee}, (err, msg) => {
      if (err) {
        reject(err);
      } else {
        console.log(msg);
        resolve(msg);
      }
    });
  });
}
function get_employee(id) {
  seneca.act({role: 'employee', cmd: 'get', id}, (err, msg) => {
    console.log(msg);
  });
}
const promise_employee = add_employee();
promise_employee.then((data) => {
  console.log('=============');
  get_employee(data.id);
});