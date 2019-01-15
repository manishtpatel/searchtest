"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var router = express_1.default.Router();
var port = 3000;
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
// 
// Search filters (SortBy, keyword, page, hitsperpage, refinements)
// autocomplete filters (keyword, refinements)
// result (hits)
var abstract_parameters = function (req) {
};
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/search', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});
router.get('/search', function (req, res) {
    res.send('search result2');
});
// mount the router on the app
app.use('/', router);
// TEST SEARCH CALL
