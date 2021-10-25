"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../database/models/user"));
const body_parser_1 = __importDefault(require("body-parser"));
const router = express_1.default.Router();
const urlencodedparser = body_parser_1.default.urlencoded({ extended: true });
router.get("/", (req, res) => {
    res.redirect("/");
});
router.get("/signup", (req, res) => {
    res.render("signup.ejs", { data: { message: `` } });
});
router.post("/signedup", urlencodedparser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responses = req.body;
    const query = yield user_1.default.findOne({ username: responses.username });
    if (!query) {
        const new_user = new user_1.default({ username: responses.username, password: responses.password, points: 0 });
        yield new_user.save();
        res.send("Successfully signed up!");
    }
    else {
        res.render("signup.ejs", { data: { message: `Somebody already has the username ${responses.username}` } });
    }
}));
exports.default = router;
//# sourceMappingURL=user.js.map