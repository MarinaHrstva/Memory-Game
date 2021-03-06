import { data} from './data.js'
let counter = 0;

const section = document.querySelector('section');

randomize(data);

data.map(cardGenerator).forEach(c => {
    section.appendChild(c)
})

function cardChecker(e) {
    e.target.classList.add('flipped');
    const flippedCards = Array.from(document.querySelectorAll('.flipped'));
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') == flippedCards[1].getAttribute('name')) {
            flippedCards.forEach(c => {
                c.classList.remove('flipped');
                c.style.pointerEvents = 'none';
            })
        } else {
            flippedCards.forEach(c => {
                c.classList.remove('flipped');
                setTimeout(() => {
                    c.classList.remove('toggleCard');

                }, 1200)
            })
        }
        counter++;
        console.log(counter);
     
    }
}

function randomize(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

function cardGenerator(img) {

    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');

    card.classList.add('card');
    face.classList.add('face');
    back.classList.add('back');

    face.src = img.src;
    card.setAttribute('name', img.name)

    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        cardChecker(e);
        playerMovesUpdate()
    })

    return card

}

function playerMovesUpdate() {
    const spanElement = document.querySelector('.playerMoves');
    spanElement.textContent = counter;
}


