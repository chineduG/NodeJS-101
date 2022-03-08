// ! Functions

// ** Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName) ;
}
greet('Gabriel', 'Chinedu');

// ** Calculating a value Example 1

function square(number){
    return number * number
}

console.log(square(2));

// ** Calculating a value Example 2

function circle(numberValue){
    return numberValue * 4 * numberValue;
}

let setNumber = circle(5);

console.log(setNumber);