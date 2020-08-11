
/**
 * 
 * @param {object} arr 
 */
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

/**
 * 
 * @param {number} max 
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let pointCounter = 0;
let currentQuestionNum = 1;
let correctAnswer;



function viewQuestion() {

    let leftNumber = getRandomNumber(10)
    let rightNumber = getRandomNumber(10)
    correctAnswer = leftNumber * rightNumber;

    let strLeftNumber = leftNumber.toString();
    let strRightNumber = rightNumber.toString();


    const showExpression = document.getElementById('problem');
    showExpression.querySelector('div.expression').innerText = leftNumber + ' * ' + rightNumber;


    let randomAnswerA = getRandomNumber(82)
    while (randomAnswerA === correctAnswer) { randomAnswerA = getRandomNumber(82) }

    let randomAnswerB = getRandomNumber(82)
    while (randomAnswerB === correctAnswer) { randomAnswerB = getRandomNumber(82) }

    let randomAnswerC = getRandomNumber(82)
    while (randomAnswerC === correctAnswer) { randomAnswerC = getRandomNumber(82) }

    let arrayNumbers = [correctAnswer, randomAnswerA, randomAnswerB, randomAnswerC]

    shuffleArray(arrayNumbers)


    const showChoices = document.getElementById('answers');
    const ul = document.querySelector('ul');
    arrayNumbers.forEach((num) => {
        document.querySelector('li').innerText = num;
        const li = document.querySelector('li');
        ul.appendChild(li);
    })



}


document.addEventListener("DOMContentLoaded", () => {



    const resetButton = document.querySelectorAll('#btnStartOver')
    resetButton.forEach((over) => {
        over.addEventListener('click', () => {
            pointCounter = 0;
            currentQuestionNum = 1;
            viewQuestion();

            document.getElementById('answers').style.display = '';
            document.querySelector('.expression').style.display = '';
            document.querySelector('.show-hide').style.display = '';

            const currentScore = document.querySelector('.currentScore');
            currentScore.innerText = 0;

            const currentProblem = document.querySelector('.currentProblem');
            currentProblem.innerText = 1;

        })
    })


    viewQuestion();

    const lists = document.querySelectorAll('li');

    lists.forEach((list) => {
        list.addEventListener('click', () => {

            currentQuestionNum++

            if (currentQuestionNum <= 11) {
                if (parseInt(list.innerText) === correctAnswer) {

                    pointCounter++
                    const currentScore = document.querySelector('.currentScore');
                    currentScore.innerText = pointCounter;

                }
                const currentProblem = document.querySelector('.currentProblem');

                if (currentQuestionNum < 11) {
                    currentProblem.innerText = currentQuestionNum;
                }
                viewQuestion();

            }

            if (currentQuestionNum === 11) {
                document.getElementById('answers').style.display = 'none';
                document.querySelector('.expression').style.display = 'none';
                document.querySelector('.show-hide').style.display = 'none';
            }

        })
    })
});






