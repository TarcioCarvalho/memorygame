const emojis = ['🍍', '🍍', '🍓', '🍓', '🍇', '🍇', '🍉', '🍉', '🍌', '🍌', '🍎', '🍎', '🍒', '🍒', '🥝', '🥝']
const randomEmoji = shuffle(emojis)
let counter = 0
const cardMatch = []
const cardIndex = []

const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    cards[i].firstElementChild.textContent = emojis[i]
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        if (counter < 1) {
            flipCard(cards[i], i)
            counter++
        } else if (counter >= 1 && i != cardIndex[0]) {
            flipCard(cards[i], i)
            match(cardIndex[0], cardIndex[1])
        }
    })
}

document.querySelector('.reset')
    .addEventListener('click', () => {
        cards.forEach(card => card
            .firstElementChild.classList.remove('active'))
        counter = 0
        cardMatch.splice(0, 2)
        cardIndex.splice(0, 2)
        return
    })

function flipCard(card, index) {
    if (card.firstElementChild.classList.contains('active')) {
        return
    } else {
        card.firstElementChild.classList.add('active')
        cardMatch.push(card.firstElementChild.textContent)
        cardIndex.push(index)
        counter++
    }
}

function match(i, j) {
    if (cardMatch[0] !== cardMatch[1]) {
        setTimeout(() => {
            cards[i].firstElementChild.classList.remove('active')
            cards[j].firstElementChild.classList.remove('active')
        }, 500)
        counter = 0
        cardMatch.splice(0, 2)
        cardIndex.splice(0, 2)
        return
    } else {
        counter = 0
        cardMatch.splice(0, 2)
        cardIndex.splice(0, 2)
        return
    }
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

