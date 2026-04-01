const image = document.getElementById("image");
const quoteElement = document.getElementById("quote");
const button = document.getElementById("generateBtn");

const beginnings = [
    'Кто рано встает, ',
    'Не бойся ошибаться, ',
    'Когда меня рожали, ',
    'Каждый может кинуть камень в волка, ',
    'Нельзя стоять, когда другие работают, ',
    'Иногда, жизнь — это жизнь, ',
    'Лучше делать, чем думать, ',
    'Если долго мучиться, '
];

const endings = [
    'тот потом пожалеет о своем решении.',
    'собственно, тогда я и родился.',
    'но не каждый может кинуть волка в камень.',
    'надо лежать.',
    'а ты в ней — иногда.',
    'бойся не ошибаться.',
    'чем думать о том, как сделать.',
    'что-нибудь получится.'
];

const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuote() {
    image.classList.remove('show');
    quoteElement.classList.remove('show');

    setTimeout(() => {
        const beginning = getRandomElement(beginnings);
        const ending = getRandomElement(endings);
        let fullQuote = beginning + ending;

        // Адаптация размера шрифта
        if (fullQuote.length > 85) {
            quoteElement.style.fontSize = '24px';
        } else if (fullQuote.length > 65) {
            quoteElement.style.fontSize = '26px';
        } else {
            quoteElement.style.fontSize = '28px';
        }

        quoteElement.textContent = fullQuote;
        image.src = 'images/' + getRandomElement(images);

        // Показываем с анимацией
        image.classList.add('show');
        quoteElement.classList.add('show');
    }, 700);
}

// Клик по кнопке
button.addEventListener('click', generateQuote);

// Первая цитата при загрузке
generateQuote();