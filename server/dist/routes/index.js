"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
var glob_1 = __importDefault(require("glob"));
function registerRoutes(router) {
    var dir = (__dirname + '/**/*.route.*').replace(/\\/g, '/');
    var routes = glob_1.default.sync(dir);
    routes.map(function (route) { return register(route, router); });
    return routes;
}
exports.registerRoutes = registerRoutes;
function register(routePath, app) {
    var route = require(routePath);
    route.register(app);
}
