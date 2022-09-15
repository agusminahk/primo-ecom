"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var aa = '';
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(process.env.PORT, function () {
    console.log("\u26A1\uFE0FServer is running at https://localhost:".concat(process.env.PORT));
});
