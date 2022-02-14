const throwDies = () => {
    let cube = Math.floor(Math.random() * 6) + 1;
    return cube;
}

const getUser1 = () => {
    return throwDies() + throwDies() + throwDies();
}

const getUser2 = () => {
    return throwDies() + throwDies() + throwDies();
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
