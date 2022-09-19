"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var passport_1 = __importDefault(require("passport"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = require("./routes");
dotenv_1.default.config({ path: './.env.local' });
require("./security/passport");
var app = (0, express_1.default)();
var router = express_1.default.Router();
app.use((0, cookie_session_1.default)({
    secret: process.env.SESSION_SECRET,
    name: 'primo',
    keys: ['primo'],
    maxAge: 24 * 60 * 60 * 100,
}));
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use((0, helmet_1.default)());
app.use('/api', router);
console.log((0, routes_1.registerRoutes)(router));
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(process.env.PORT || 8080, function () {
    console.log("\u26A1\uFE0FServer is running at https://localhost:".concat(process.env.PORT || 8080));
});
