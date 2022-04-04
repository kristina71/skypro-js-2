function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

const cardCount = 36;
const gallery = document.querySelector('.gallery');
const cardNames = [
    '6 бубны',
    '6 крести',
    '6 пики',
    '6 черви',
    '7 бубны',
    '7 крести',
    '7 пики',
    '7 черви',
    '8 бубны',
    '8 крести',
    '8 пики',
    '8 черви',
    '9 бубны',
    '9 крести',
    '9 пики',
    '9 черви',
    '10 бубны',
    '10 крести',
    '10 пики',
    '10 черви',
    'валет бубны',
    'валет крести',
    'валет пики',
    'валет черви',
    'дама бубны',
    'дама крести',
    'дама пики',
    'дама черви',
    'король бубны',
    'король крести',
    'король пики',
    'король черви',
    'туз бубны',
    'туз крести',
    'туз пики',
    'туз черви',
];

const cardValues = shuffle(cardNames);

for (let i = 1; i < cardCount + 1; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    gallery.appendChild(card);
}

const cardActive = document.querySelectorAll('.card');

cardActive.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let j = 0;
        let tempElement = element;
        for (let i = cardCount; i > 0; i--) {
            if (tempElement.previousElementSibling) {
                j++;
                tempElement = tempElement.previousElementSibling;
            }
        }
        event.target.style.background = `url("img/${cardValues[j]}.jpg")`;
    });
});
