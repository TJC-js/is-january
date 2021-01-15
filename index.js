/*!
 * is-january <https://github.com/TJC-js/is-january>
 *
 * Copyright (c) 2021-current, Tim Cane.
 * Released under the MIT License.
 */

'use strict';

var isDate = require("is-a-date");

module.exports = function isJanuary(value) {
    if(!isDate(value)){
        throw new Error('expected a date');
    }

    return value.getMonth() == 0;
};