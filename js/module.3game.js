const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case 'камень':
        case 'ножницы':
        case 'бумага':
        case 'колодец':
            return userInput;
    }
    console.warn('Ошибка!');
    
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
    if (userChoice === computerChoice) return 'Ничья';
    
    const victoryWithRock = userChoice === 'камень' && computerChoice === 'ножницы';
    const victoryWithScissors = userChoice === 'ножницы' && computerChoice === 'бумага';
    const victoryWithPaper = userChoice === 'бумага' && computerChoice === 'камень';
    
    if (victoryWithRock || victoryWithScissors || victoryWithPaper) return 'победа';
    
    return 'поражение';
}

const playGame = () => {
    let userChoice = getUserChoice('бумага');
    let computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}

playGame();
