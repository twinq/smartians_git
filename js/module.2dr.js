const myName = 'Daniil';

const myAge = 19;

let myDrink = '';


if (myAge < 21) {
    myDrink = 'juise';
} else  if (myAge > 21 && myAge < 30){
    myDrink = 'beer';
} else if (myAge > 30) {
    myDrink = 'whiskey and cigar';
} else if (myAge === 21) {
    myDrink = 'not today';
} 

console.log(`Приветствую ${myName}, будешь ${myDrink}`);