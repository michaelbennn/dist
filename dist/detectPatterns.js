"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectPatterns = void 0;
function detectPatterns(name) {
    const patterns = new Set();
    // Pattern 1: ABBA
    const abbaRegex = /^(\d)(\d)\2\1$/;
    if (abbaRegex.test(name)) {
        patterns.add("ABBA");
    }
    // Pattern 2: AAA
    const aaaRegex = /^(\d)\1{2}$/;
    if (aaaRegex.test(name)) {
        patterns.add("AAA");
    }
    // Pattern 3: AABC
    const aabcRegex = /^(\d)\1(\d)(?!\1)(\d)$/;
    if (aabcRegex.test(name)) {
        patterns.add("AABC");
    }
    // Pattern 4: ABBC
    const abbcRegex = /^(\d)(\d)\1(?!\1)(\d)$/;
    if (abbcRegex.test(name)) {
        patterns.add("ABBC");
    }
    // Pattern 5: ABCD
    const abcdRegex = /^(\d)(\d)(?!\1|\2)(\d)(?!\1|\2|\3)(\d)$/;
    if (abcdRegex.test(name)) {
        patterns.add("ABCD");
    }
    // Pattern 6: AAAA
    const aaaaRegex = /^(\d)\1{3}$/;
    if (aaaaRegex.test(name)) {
        patterns.add("AAAA");
    }
    // Pattern 7: AAAAA
    const aaaaaRegex = /^(\d)\1{4,}$/;
    if (aaaaaRegex.test(name)) {
        patterns.add("AAAAA");
    }
    // Pattern 8: 10K
    const tenKRegex = /^\d{2}\d{3}$/;
    if (tenKRegex.test(name)) {
        patterns.add("10K");
    }
    // Pattern 9: 100K
    const hundredKRegex = /^\d{3}\d{3}$/;
    if (hundredKRegex.test(name)) {
        patterns.add("100K");
    }
    // Pattern 10: XXX000
    const xxx000Regex = /^\d{3}0{3}$/;
    if (xxx000Regex.test(name)) {
        patterns.add("XXX000");
    }
    // Pattern 11: 0XXX
    const zeroXxxRegex = /^0\d{3}$/;
    if (zeroXxxRegex.test(name)) {
        patterns.add("0XXX");
    }
    // Pattern 12: 00XX
    const zeroZeroXxRegex = /^00\d{2}$/;
    if (zeroZeroXxRegex.test(name)) {
        patterns.add("00XX");
    }
    // Pattern 13: 0x10K
    const hexTenKRegex = /^0x\d{2}\d{3}$/;
    if (hexTenKRegex.test(name)) {
        patterns.add("0x10K");
    }
    // Pattern 14: MMDD
    const mmddRegex = /^\d{2}\d{2}$/;
    if (mmddRegex.test(name)) {
        patterns.add("MMDD");
    }
    return patterns;
}
exports.detectPatterns = detectPatterns;
