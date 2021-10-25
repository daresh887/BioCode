"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const connect_1 = __importDefault(require("./database/connect"));
const app = (0, express_1.default)();
const PORT = 2000;
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
(0, connect_1.default)("mongodb://localhost:27017/bio-code");
app.get("/", (req, res) => {
    res.sendStatus(200);
});
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map