"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators");
var decorators_2 = require("../decorators");
var action_1 = require("../kernel/action");
var route_types_1 = require("../kernel/route-types");
var vputils_1 = require("../utils/vputils");
var kernel_utils_1 = require("../kernel/kernel-utils");
var mysql_factory_1 = require("../mysql/mysql_factory");
var CadastroAction = /** @class */ (function (_super) {
    __extends(CadastroAction, _super);
    function CadastroAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CadastroAction.prototype.validateData = function () {
        new kernel_utils_1.KernelUtils().createExceptionApiError('1001', 'Dados inválidos', this.req.body.tamanho == '' || this.req.body.sabor == '');
    };
    CadastroAction.prototype.generateSQL = function () {
        return 'INSERT INTO sabor(tamanho, sabor, preco) VALUES ( \'' + this.req.body.tamanho + '\' and sabor \'' + this.req.body.sabor + '\' ' + this.req.body.preco + '\' )';
    };
    CadastroAction.prototype.generateSQLGetTamanhos = function () {
        return 'select * from tamanho';
    };
    CadastroAction.prototype.Post = function () {
        var _this = this;
        this.validateData();
        new mysql_factory_1.MySQLFactory().getConnection().select(this.generateSQL()).subscribe(function (data) {
            if (!data.length || data.length != 1) {
                _this.sendError(new kernel_utils_1.KernelUtils().createErrorApiObject(401, '1001', 'Dados invalidos'));
                return;
            }
            _this.sendAnswer({
                token: new vputils_1.VPUtils().generateGUID().toUpperCase(),
                tamanho: _this.req.body.tamanho,
                sabor: _this.req.body.sabor,
                preco: _this.req.body.preco
            });
        }, function (error) {
            console.log(error);
            _this.sendError(error);
        });
    };
    CadastroAction.prototype.GetTamanho = function () {
        var _this = this;
        new mysql_factory_1.MySQLFactory().getConnection().select(this.generateSQLGetTamanhos()).subscribe(function (data) {
            console.log(data);
            _this.sendAnswer(data);
        }, function (error) {
            _this.sendError(error);
        });
    };
    CadastroAction.prototype.defineVisibility = function () {
        this.actionEscope = route_types_1.ActionType.atPublic;
    };
    __decorate([
        decorators_1.Post('/cadastro'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CadastroAction.prototype, "Post", null);
    __decorate([
        decorators_2.Get('/tamanhoConsulta'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CadastroAction.prototype, "GetTamanho", null);
    return CadastroAction;
}(action_1.Action));
exports.CadastroAction = CadastroAction;
