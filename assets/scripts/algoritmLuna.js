'use strict';

function checkCardNumber(number) {
    const cardNumber = number.replaceAll(" ", "").split("");
    let allSum = 0;

    for(let i = 0; i < cardNumber.length; i++){
        if (i%2 === 0) {
            cardNumber[i] = +cardNumber[i] * 2;

            if(cardNumber[i] > 9) {
                cardNumber[i] -= 9;
            }
        }
        allSum += +cardNumber[i];
    }

    return allSum % 10 === 0 ? true : false;
}

console.log(checkCardNumber('4  5 6 1   2  6  1  2  1  2  3  4  5  4  6  7'));