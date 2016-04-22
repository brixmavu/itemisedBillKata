var assert = require('assert');
var durationSec = require('../modules/durationSec');
var allPhoneCalls = require('../modules/allPhoneCalls');
var readLines = require('../modules/readLines');

describe('should calculate the duration in seconds of a call', function () {
    it('return duration in seconds because given format is 00h00m00s, CellC', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      var allPhoneCalls = allPhoneCalls.allPhoneCalls(bill, 'CellC');
      var totalSecSec = {
        '0841257809': 8,
        '0841257809': 8,
        '0841257809': 8,
        '0841257809': 8,
        '0841257809': 8,
        '0841257809': 8,
        '0841257809': 8,
        '0841257809': 8,
        '0825605600': 2,
        '0825605600': 2,
        '0845009087': 1
      }
      assert.equal(durationSec.durationSec(perInterval), totalSec);
    });

    it('return duration in seconds because given format is 00h00m00s, MTN', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      var allPhoneCalls = allPhoneCalls.allPhoneCalls(bill, 'MTN');
      var totalSec = {
        '0832401145': 5,
        '0832401145': 5,
        '0832401145': 5,
        '0832401145': 5,
        '0832401145': 5,
        '0838758090': 5,
        '0838758090': 5,
        '0838758090': 5,
        '0838758090': 5,
        '0838758090': 5,
        '0831239023': 3,
        '0831239023': 3,
        '0831239023': 3,
        '0832004576': 1,
        '0837351200': 1,
        '0834590001': 1
      }
      assert.equal(durationSec.durationSec(perInterval), totalSec);
    });

    it('return duration in seconds because given format is 00h00m00s, Vodacom', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      var allPhoneCalls = allPhoneCalls.allPhoneCalls(bill, 'Vodacom');
      var totalSec = {
        '0821302398': 34,
        '0821302398': 124,
        '0828907600': 56,
        '0824501276': 34,
        '0821005078': 76,
        '0828009712': 56,
        '0828901271': 154,
        '0828901271': 76
      }
      assert.equal(durationSec.durationSec(perInterval), totalSec);
    });


})
