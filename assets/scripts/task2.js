'use strict';

//Задача на превышение скорости автомобиля

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const speedsArray = [];
const letters = ["А", "В", "Е", "К", "М", "Н", "О", "Р", "С", "Т", "Х"];

function getCardata() {
    const obj = {
        number: "", 
        speed: 0
    }; 

    obj.number = `${getRandomInt(0, 9)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}${getRandomInt(0, 9)}${letters[getRandomInt(0, 10)]}${letters[getRandomInt(0, 10)]}-${getRandomInt(1, 8)}`;

    obj.speed = getRandomInt(50, 110);

    return obj;
}

for(let i = 0; i < 10; i++){
  speedsArray.push(getCardata())
}

speedsArray.forEach(car => {
  if (car.speed > 90){
    console.log(`Машина с номером ${car.number} превысила скорость на ${car.speed-90} км/ч\nМакс скорость 90 км/ч!`)
  }
})

