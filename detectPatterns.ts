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

function detectPatterns(dns: string): Set<Array<string>> {
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

    }else if (lengthOfNumber === 4) {
        patternsList.push("10K")
        if (name.startsWith('0') || name.endsWith('0')) {//X0
            if (parseInt(name[0]) === 0) {
                patternsList.push("0XXX")
                if (parseInt(name[1]) === 0) {
                    patternsList.push("00XX")
                } else if (parseInt(name[2]) === 0) {
                    patternsList.push("0X0X")
                } else if (parseInt(name[3]) === 0) {
                    patternsList.push("0XX0")
                }
            } else if (parseInt(name[3]) === 0) {
                if (parseInt(name[2]) === 0) {
                    patternsList.push("XX00")
                } else if (parseInt(name[1]) === 0){
                    patternsList.push("X0X0")
                }
            }
        } else { //ABC
            if (parseInt(name[1]) === parseInt(name[2])) { //ABBB/AAAB/ABBA/ABBC
                if (parseInt(name[3]) === parseInt(name[2]) && parseInt(name[1]) !== parseInt(name[0])) {
                    patternsList.push("ABBB")
                } else if(parseInt(name[0]) === parseInt(name[1]) && parseInt(name[1]) === parseInt(name[0])){
                    patternsList.push("AAAB")
                } else if(parseInt(name[0]) === parseInt(name[3]) && parseInt(name[1]) !== parseInt(name[0])){
                    patternsList.push("ABBA")
                } else if(parseInt(name[0]) !== parseInt(name[3]) && parseInt(name[1]) !== parseInt(name[0])){
                    patternsList.push("ABBC")
                }
            } else { // AABB/ABAA/AABA/ABAB/AABC/ABCC
                if (parseInt(name[0]) === parseInt(name[1]) && parseInt(name[2]) === parseInt(name[3])){
                    patternsList.push("AABB")
                }else if ((parseInt(name[0]) !== parseInt(name[1])) && parseInt(name[0]) === parseInt(name[3])&& parseInt(name[0]) === parseInt(name[2])){
                    patternsList.push("ABAA")
                }else if ((parseInt(name[0]) === parseInt(name[1])) && parseInt(name[0]) === parseInt(name[3])){
                    patternsList.push("AABA")
                }else if ((parseInt(name[0]) === parseInt(name[2])) && parseInt(name[1]) === parseInt(name[3])){
                    patternsList.push("ABAB")
                }else if ((parseInt(name[0]) === parseInt(name[1])) && parseInt(name[1]) !== parseInt(name[3])&& parseInt(name[2]) !== parseInt(name[3])){
                    patternsList.push("AABC")
                }else if ((parseInt(name[0]) !== parseInt(name[1])) && parseInt(name[1]) !== parseInt(name[3])&& parseInt(name[2]) === parseInt(name[3])){
                    patternsList.push("ABCC")
                }
            }
        }
    }else if (lengthOfNumber === 5){
        patternsList.push("100K")
        if (parseInt(name[0]) !== parseInt(name[1]) && parseInt(name[1]) === parseInt(name[2])&& parseInt(name[2]) === parseInt(name[3])&& parseInt(name[3]) === parseInt(name[4])) {
            patternsList.push("ABBBB")
        } else if (parseInt(name[0]) !== parseInt(name[1]) && parseInt(name[1]) === parseInt(name[2])&& parseInt(name[2]) === parseInt(name[3])&& parseInt(name[3]) === parseInt(name[0])) {
            patternsList.push("BAAAA")
        } else if (parseInt(name[0]) !== parseInt(name[1]) && parseInt(name[0]) === parseInt(name[2])&& parseInt(name[2]) === parseInt(name[3])&& parseInt(name[3]) === parseInt(name[4])) {
            patternsList.push("ABAAA")
        } else if (parseInt(name[3]) !== parseInt(name[4]) && parseInt(name[1]) === parseInt(name[2])&& parseInt(name[2]) === parseInt(name[3])&& parseInt(name[3]) === parseInt(name[0])) {
            patternsList.push("AAAAB")
        } else if (parseInt(name[3]) !== parseInt(name[2]) && parseInt(name[1]) === parseInt(name[3])&& parseInt(name[4]) === parseInt(name[3])&& parseInt(name[3]) === parseInt(name[0])) {
            patternsList.push("AABAA")
        } 
    }
    
    patterns.add(patternsList);
    
    return patterns;
}

export { detectPatterns };