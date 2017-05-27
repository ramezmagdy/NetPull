'use strict';
var loginName = 'ramy.magdy';
var validName = 'ramez.hanna';

loginName = validName;

function findAndValidateUser(username, callback) {
  if (username === validName) {
    return callback(null,true);
  } else {
    return callback(null,false);
  }
}

function printResult(err, bool) {
  if (err) {
    return console.log(err);
  }
  if (bool) {
    return console.log("Welcome,", loginName);
  } else {
    return console.log("Invalid login name", loginName);
  }
}

findAndValidateUser(loginName, printResult);