const myAge = 23;

let myChanel = '';

let buttonNumber = Math.floor(Math.random() * 6);

switch (buttonNumber) {
    case 0:
        myChanel = 'New Chanel';
        break;
    case 1:
        myChanel = '1 + 1';
        break;
    case 2:
        myChanel = 'M1';
        break;
    case 3:
        myChanel = 'Vesti';
        break;
    case 4:
        myChanel = 'Hot';
        break;
    case 5:
        myChanel = 'Goodnight';
        break;
}
console.log(`Сегодня вечером я смотрю ${myChanel}`);


if (myAge >= 18 && myChanel === 'Goodnight') {
    console.log(`Канал имеет возрастные ограничения. Приятного просмотра`);
} else if (myAge >= 18 && myChanel === 'Hot') {
    console.log('Канал имеет возрастные ограничения. Приятного просмотра');
} else if (myAge < 18 && myChanel === 'Goodnight') {
    console.log('Канал имеет возрастные ограничения. Просмотр запрещён');
} else if (myAge < 18 && myChanel ==='Hot') {
    console.log ('Канал имеет возрастные ограничения. Просмотр запрещён');
}