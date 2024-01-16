const gameBotFunction = function () {
    const randomGenerate = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let mysteryNumber = randomGenerate(1, 100);
    let attempts = 3;

    const getResult = function () {
        let answerNum = parseInt(prompt('Угадайте число от 1 до 100'));
        if (answerNum === null) {
            alert('Вы завершили игру');
            return;
        }
        while (isNaN(answerNum) || answerNum === '') {
            answerNum = parseInt(prompt('Введите корректное число'));
        }


        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше вашего');
            alert('У вас осталось ' + attempts + ' попыток');
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше вашего');
            alert('У вас осталось ' + attempts + ' попыток');
        } else {
            let playAgain = confirm('Поздравляю, вы угадали число! Хотите сыграть еще раз?');

            if (playAgain) {
                attempts = 3;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                attempts = -1;
                alert('Вы завершили игру');
                return;
            }
        }

        if (attempts > 0) {
            attempts--;
            getResult();
        } else {
            let playAgain = confirm('У вас закончились попытки. Хотите сыграть еще раз?');

            if (playAgain) {
                attempts = 3;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
                return;
            }
        }
    };

    getResult();
};

gameBotFunction();










