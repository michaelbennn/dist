"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const detectPatterns_1 = require("./detectPatterns");
function runTests() {
    // Test cases
    assert_1.default.deepEqual((0, detectPatterns_1.detectPatterns)("333.bit"), new Set(["AAA", "999"]));
    assert_1.default.deepEqual((0, detectPatterns_1.detectPatterns)("2112.bit"), new Set(["ABBA", "10K"]));
    assert_1.default.deepEqual((0, detectPatterns_1.detectPatterns)("45555.bit"), new Set(["ABBBB", "100K"]));
    assert_1.default.deepEqual((0, detectPatterns_1.detectPatterns)("888000.bit"), new Set(["AAABBB", "XXX000"]));
    assert_1.default.deepEqual((0, detectPatterns_1.detectPatterns)("0098.bit"), new Set(["10K", "AABC", "0XXX", "00XX"]));
    assert_1.default.deepEqual((0, detectPatterns_1.detectPatterns)("0x9832.bit"), new Set(["0x10K"]));
    assert_1.default.deepEqual((0, detectPatterns_1.detectPatterns)("0311.bit"), new Set(["ABCC", "0XXX", "10K", "MMDD"]));
    console.log("All tests passed!");
}
runTests();
