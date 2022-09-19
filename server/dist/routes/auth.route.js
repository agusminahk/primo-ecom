"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
var passport_1 = __importDefault(require("passport"));
var Auth_controller_1 = require("../controllers/Auth.controller");
var register = function (app) {
    var redirects = {
        successRedirect: process.env.GCLIENT_URL,
        failureRedirect: '/login/failed',
    };
    app.get('/auth/google/success', Auth_controller_1.AuthController.success);
    app.get('/auth/google/failed', Auth_controller_1.AuthController.failed);
    app.get('/auth/google', passport_1.default.authenticate('google', ['profile', 'email']));
    app.get('/auth/google/callback', passport_1.default.authenticate('google', redirects));
    app.get('/auth/logout', Auth_controller_1.AuthController.logout);
};
exports.register = register;
