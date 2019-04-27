"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("../mysql/mysql");
var MySQLFactory = /** @class */ (function () {
    function MySQLFactory() {
    }
    MySQLFactory.prototype.getConnection = function () {
        return new mysql_1.MySQL('localhost', 'root', '1234', 'mydb');
    };
    return MySQLFactory;
}());
exports.MySQLFactory = MySQLFactory;
