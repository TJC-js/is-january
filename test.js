'use strict';

require('mocha');
var assert = require('assert');

var isJanuary = require("./");

describe('isNotDate', function() {
    it('should return true if date is january', function() {
        assert(isJanuary(new Date("2021-01-01")));
    });

    it('should return false if date is not january', function() {
        assert(!isJanuary(new Date("2021-02-02")));
    });

    it('should throw an error when an invalid value is passed', function() {
        assert.throws(() => isJanuary(), /expected a date/);
        assert.throws(() => isJanuary('not a date'), /expected a date/);
      });
});
