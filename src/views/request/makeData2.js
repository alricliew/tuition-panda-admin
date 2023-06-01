"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeData = void 0;
var faker_1 = require("@faker-js/faker");
var range = function (len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};
var newPerson = function () {
    return {
        firstName: faker_1.faker.name.firstName(),
        lastName: faker_1.faker.name.lastName(),
        age: faker_1.faker.datatype.number(40),
        visits: faker_1.faker.datatype.number(1000),
        progress: faker_1.faker.datatype.number(100),
        status: faker_1.faker.helpers.shuffle([
            'relationship',
            'complicated',
            'single',
        ])[0],
    };
};
function makeData() {
    var lens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lens[_i] = arguments[_i];
    }
    var makeDataLevel = function (depth) {
        if (depth === void 0) { depth = 0; }
        var len = lens[depth];
        return range(len).map(function (d) {
            return __assign(__assign({}, newPerson()), { subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined });
        });
    };
    return makeDataLevel();
}
exports.makeData = makeData;
