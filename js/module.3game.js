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
    let comb = userChoice + computerChoice
    
    switch (comb) {
        case 'каменькамень':
        case 'ножницыножницы':
        case 'бумагабумага':
            return 'ничья';
        
        case 'каменьножницы':
        case 'ножницыбумага':
        case 'бумагакамень':
            return 'победа';
            
        case 'каменьбумага':
        case 'ножницыкамень':
        case 'бумаганожницы':
            return 'поражение';
        
            
    }
}

const playGame = () => {
    let userChoice = getUserChoice('бумага');
    let computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}
playGame();
