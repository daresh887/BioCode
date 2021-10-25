"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const questionSchema = new mongoose_1.default.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    points: { type: Number, required: true },
    identifier: { type: String, default: "identifier" },
});
const questionModel = mongoose_1.default.model("questionmodel", questionSchema);
exports.default = questionModel;
//# sourceMappingURL=question.js.map