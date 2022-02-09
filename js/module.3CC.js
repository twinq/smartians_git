const getDailyCalories = day => {
    day = day.toLowerCase();
    switch (day) {
        case 'понедельник':
            return 5000;
        case 'вторник':
            return 1300;
        case 'среда':
            return 1200;
        case 'четверг':
            return 2500;
        case 'пятница':
            return 2500;
        case 'суббота':
            return 2500;
        case 'воскресенье':
            return 2500;
    }
}

const getActualCaloriesQty = () => {
    getDailyCalories('Понедельник');
    getDailyCalories('вторник');
    getDailyCalories('среда');
    getDailyCalories('четверг');
    getDailyCalories('пятница');
    getDailyCalories('суббота');
    getDailyCalories('воскресенье');
    let sum = getDailyCalories('Понедельник') + getDailyCalories('вторник') + getDailyCalories('среда') +
    getDailyCalories('четверг') + getDailyCalories('пятница') + getDailyCalories('суббота') + getDailyCalories('воскресенье');
    return sum;
}


const getIdealCaloriesQty = () => {
    return 2500 * 7;
}


const calculateCalories = () => {
    const actualCalories = getActualCaloriesQty();
    const idealCalories = getIdealCaloriesQty();
    if (actualCalories === idealCalories) {
        console.log('норма'); 
    } else if (actualCalories > idealCalories) {
        console.log('перебор');
    } else {
        console.log('недобор');
    }
}
calculateCalories();