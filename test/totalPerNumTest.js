var assert = require('assert');
var totalPerNum = require('../modules/totalPerNum');
var allPhoneCalls = require('../modules/allPhoneCalls');
var readLines = require('../modules/readLines');

describe('should calculates the total number of calls made to numbers for each cell phone provider.', function () {
    it('return how many calls per spcified number, CellC', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      var allPhoneCalls = allPhoneCalls.allPhoneCalls(bill, 'CellC');
      var total = {
        '0841257809': 8,
        '0825605600': 2,
        '0845009087': 1
      }
      assert.equal(totalPerNum.totalPerNum(specificNum), total);
    });

    it('return how many calls per spcified number, MTN', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      var allPhoneCalls = allPhoneCalls.allPhoneCalls(bill, 'MTN');
      var total = {
        '0832401145': 5,
        '0838758090': 5,
        '0831239023': 3,
        '0832004576': 1,
        '0837351200': 1,
        '0834590001': 1
      }
      assert.equal(totalPerNum.totalPerNum(specificNum), total);
    });

    it('return how many calls per spcified number, Vodacom', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      var allPhoneCalls = allPhoneCalls.allPhoneCalls(bill, 'Vodacom');
      var total = {
        '0821302398': 2,
        '0828907600': 1,
        '0824501276': 1,
        '0821005078': 1,
        '0828009712': 1,
        '0828901271': 1,
        '0828901271': 1
      }
      assert.equal(totalPerNum.totalPerNum(specificNum), total);
    });


})
