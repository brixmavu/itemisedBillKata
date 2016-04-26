var assert = require('assert');
var durationSec = require('../modules/durationSec');
var readLines = require('../modules/readLines');

describe('should calculate the duration in seconds of a call', function() {
    it('return duration in seconds because given format is 00h00m00s, CellC', function() {
        var bill = readLines.readLines('./ItemisedBill.csv');

        var mapped = [{
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 154
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 334
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 184
        }, {
            provider: 'CellC',
            cellNum: '0825605600',
            duration: 100
        }, {
            provider: 'CellC',
            cellNum: '0825605600',
            duration: 94
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 394
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 184
        }, {
            provider: 'CellC',
            cellNum: '0845009087',
            duration: 551
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 334
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 394
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 124
        }];

        var expectedResult = [{
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 154
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 334
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 184
        }, {
            provider: 'CellC',
            cellNum: '0825605600',
            duration: 100
        }, {
            provider: 'CellC',
            cellNum: '0825605600',
            duration: 94
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 394
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 184
        }, {
            provider: 'CellC',
            cellNum: '0845009087',
            duration: 551
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 334
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 394
        }, {
            provider: 'CellC',
            cellNum: '0841257809',
            duration: 124
        }];

        assert.deepEqual(mapped, expectedResult);
    });
})
