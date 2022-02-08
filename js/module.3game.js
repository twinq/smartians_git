const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'камень' || userInput === 'ножницы' || userInput === 'бумага' || userInput === 'колодец') {
        return userInput;
    } else {
        console.warn('Ошибка!');
    }
}

const getComputerChoice = () => {
    let computerInput = Math.floor(Math.random() * 3);

    switch (computerInput) {
        case 0:
            return 'камень';
        case 1:
            return 'ножницы';
        case 2:
            return 'бумага';
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'колодец' || (userChoice === 'камень' && computerChoice === 'ножницы') 
    || (userChoice === 'ножницы' && computerChoice === 'бумага')
    || (userChoice === 'бумага' && computerChoice === 'камень')) {
        return 'победа';
    } else if ((userChoice === 'камень' && computerChoice === 'бумага') 
    || (userChoice === 'ножницы' && computerChoice === 'камень')
    || (userChoice === 'бумага' && computerChoice === 'ножницы')) {
        return 'поражение';
    } else {
        return 'ничья';
    }
}

const playGame = () => {
    let userChoice = getUserChoice('бумага');
    let computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}
playGame();
