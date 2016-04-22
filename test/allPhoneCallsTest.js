var assert = require('assert');
var allPhoneCalls = require('../modules/allPhoneCalls');
var readLines = require('../modules/readLines');

describe('should  return all the phone calls for the specified provider.', function() {
  it('return list of CellC calls', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      assert.equal(allPhoneCalls.allPhoneCalls(bill, 'CellC').length, 11);
  });

  it('return list of MTN calls', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      assert.equal(allPhoneCalls.allPhoneCalls(bill, 'MTN').length, 16);
  });

  it('return list of Vodacom calls', function() {
      var bill = readLines.readLines('./ItemisedBill.csv');
      assert.equal(allPhoneCalls.allPhoneCalls(bill, 'Vodacom').length, 8);
  });

});
