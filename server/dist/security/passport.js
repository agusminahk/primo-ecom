"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
var passport_1 = __importDefault(require("passport"));
passport_1.default.use(new passport_google_oauth20_1.default.Strategy({
    clientID: process.env.GCLIENT_ID || '',
    clientSecret: process.env.GCLIENT_SECRET || '',
    callbackURL: '/api/auth/google/callback',
    scope: ['profile', 'email'],
}, function (accessToken, refreshToken, profile, callback) {
    callback(null, profile);
}));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
