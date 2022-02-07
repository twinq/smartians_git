let myName = 'Даниил';

myName ? console.log(`Здравствуй, ${myName}`)
: console.log('Здравствуй, Джон Сноу');

let myFamilyHouse = '';

let numberFromTheFire = Math.floor(Math.random() * 9);

switch (numberFromTheFire) {
    case 0:
        myFamilyHouse = 'Таргариен';
        break;
    case 1:
        myFamilyHouse = 'Старк';
        break;
    case 2:
        myFamilyHouse = 'Баратеон';
        break;
    case 3:
        myFamilyHouse = 'Ланнистер';
        break;
    case 4:
        myFamilyHouse = 'Талли';
        break;
    case 5:
        myFamilyHouse = 'Аррен';
        break;
    case 6:
        myFamilyHouse = 'Тиррел';
        break;
    case 7:
        myFamilyHouse = 'Мартелл';
        break;
    case 8:
        myFamilyHouse = 'Грейджой';
        break;
}

console.log(`Меня зовут ${myName} и я из дома ${myFamilyHouse}!`)