const throwDies = () => {
    let cube = Math.floor(Math.random() * 6) + 1;
    return cube;
}

const getUser1 = () => {
    throwDies();
    throwDies();
    throwDies();
    let cost1 = throwDies() + throwDies() + throwDies();
    return cost1;
}

const getUser2 = () => {
    throwDies();
    throwDies();
    throwDies();
    let cost2 = throwDies() + throwDies() + throwDies();
    return cost2;
}

const dispute = () => {
    const User1 = getUser1();
    const User2 = getUser2();
    if (User1 === User2) {
        console.log('ничья'); 
    } else if (User1 > User2) {
        console.log('победа первого игрока');
    } else {
        console.log('победа второго игрока');
    }
}

dispute();
