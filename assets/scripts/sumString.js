"use strict";

function BigSumString(firstStr, secondStr) {
    const firstStrArr = firstStr.split("");
    const secondStrArr = secondStr.split("");

    for(let i = firstStrArr.length-1; i >= 0; i--) {
        if((+firstStrArr[i]+ +secondStrArr[i]) >= 10)
        {
            firstStrArr[i] = (+firstStrArr[i]+ +secondStrArr[i]) % 10
            firstStrArr[i-1] = +firstStrArr[i-1] + 1
        } else {
            firstStrArr[i] = +firstStrArr[i]+ +secondStrArr[i]
        }
    }

    return firstStrArr.join("");
}

console.log(BigSumString("42657289546712569285", "43751396510954678324"));
