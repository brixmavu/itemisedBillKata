var assert = require('assert');
var readLines = require('../modules/readLines');

describe('read CSV file', function() {
    it('should read each line in the file become a map/object', function() {
      assert.equal(readLines.readLines('./ItemisedBill.csv').length, 35)
    })

})
