//
function numberOfDigits(number:number): number {
    let value: number = 0;
    value = 123
    return value
}
// 三位数字的模式（排除两个特例和999）
function threeNumber(threeNumber:string): Array<string> {
    let numberList:Array<string> = new Array<string>();
    let numberSplit = threeNumber.split("");
    let firstNumber = parseInt(numberSplit[0])
    let secondNumber = parseInt(numberSplit[1])
    let thirdNumber = parseInt(numberSplit[2])
    if (secondNumber !== firstNumber && thirdNumber === secondNumber ) {
        numberList.push("ABB")
    } else if (secondNumber === firstNumber && thirdNumber!== secondNumber ) {
        numberList.push("AAB")
    } else if (thirdNumber === firstNumber && thirdNumber!== secondNumber ) {
        numberList.push("ABA")
    }
    return numberList
}
// 两位数字的模式, flag判断是AB,BA,BC,CC (0,1,2,3)
function twoNumber(twoNumber:string, flag: number): string {
    let numberSplit = twoNumber.split("");
    let firstNumber = parseInt(numberSplit[0])
    let secondNumber = parseInt(numberSplit[1])
    if (secondNumber !== firstNumber) {
        if (flag === 0) {
            return "AB"
        } else if (flag === 1) {
            return "BA"
        } else {
            return "BC"
        } 
    } else {
        if (flag === 3) {
            return "BB"
        } else if (flag === 4) {
            return "CC"
        } else{
            return "AA"
        }
    }
}

function detectPatterns(dns: string): Set<string> {
    const patterns: Set<Array<string>> = new Set();
    const patternsList: Array<string> = new Array();
    const name = dns.split('.')[0]


    
    // Pattern 1: AAA~AAAAAA
    const aaaRegex = /^(\d)\1{2,5}$/;
    if (aaaRegex.test(name)) {
        let element:string = "";
        for (let i = 0; i < name.length; i++) {
            element += "A"            
        }
        patternsList.push(element);
    }
    // Pattern 2: ABC~ABCDE
    const sequenceRegex = /^(?:123|234|345|456|567|678|789|890|1234|2345|3456|4567|5678|6789|7890|12345|23456|34567|45678|56789|67890)$/;
    if (sequenceRegex.test(name)) {
        const ALPHABET = ["A", "B", "C", "D", "E"]
        let element:string = "";
        for (let i = 0; i < name.length ; i++) {
            element += ALPHABET[i]            
        }
        patternsList.push(element);
    }
    
    let lengthOfNumber = name.length;
    if (lengthOfNumber === 3) {
        patternsList.push("999");
        let threeNumberList = threeNumber(name)
        patternsList.push(...threeNumberList);

    }else if (lengthOfNumber === 4) { //TODO:未完待续
        let firstTwoNumbers = name.substring(0, 2);
        let secondTwoNumbers = name.substring(2, 4);
        if (name) {
            
        }
        let firstTwoNumberString = twoNumber(firstTwoNumbers)
        let secondTwoNumberString = twoNumber(firstTwoNumbers)
        if (secondTwoNumberString === "") {
            
        }

        
    }
    // Pattern 2: ABBA
    const abbaRegex = /^(\d)(\d)\2\1$/;
    if (abbaRegex.test(name)) {
        patterns.add("ABBA");
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
    
    
    // Pattern 8: 10K
    const tenKRegex = /^(\d{1,2})\d{3}$/;
    if (tenKRegex.test(name)) {
        patterns.add("10K");
    }
    
    // Pattern 9: 100K
    const hundredKRegex = /^(\d{1,3})\d{3}$/;
    if (hundredKRegex.test(name)) {
        patterns.add("100K");
    }
    
    // Pattern 10: XXX000
    const xxx000Regex = /^(\d{1,3})0{3}$/;
    if (xxx000Regex.test(name)) {
        patterns.add("XXX000");
    }
    
    // Pattern 11: 0XXX
    const zeroXxxRegex = /^0(\d{1,3})$/;
    if (zeroXxxRegex.test(name)) {
        patterns.add("0XXX");
    }
    
    // Pattern 12: 00XX
    const zeroZeroXxRegex = /^00(\d{1,2})$/;
    if (zeroZeroXxRegex.test(name)) {
        patterns.add("00XX");
    }
    
    // Pattern 13: 0x10K
    const hexTenKRegex = /^0x(\d{1,2})\d{3}$/;
    if (hexTenKRegex.test(name)) {
        patterns.add("0x10K");
    }
    
    // Pattern 14: MMDD
    const mmddRegex = /^(\d{2})(\d{2})$/;
    if (mmddRegex.test(name)) {
        patterns.add("MMDD");
    }
    patterns.add(patternsList);
    
    return patterns;
}

export { detectPatterns };