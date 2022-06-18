const section = document.querySelector('section');
let counter = 0;


const data = [{ imgSrc: './Images/crocodile.jpg', name: 'crocodile' },
{ imgSrc: './Images/elefant.jpg', name: 'elefant' },
{ imgSrc: './Images/giraffe.webp', name: 'giraffe' },
{ imgSrc: './Images/hippo.jpg', name: 'hippo' },
{ imgSrc: './Images/lion.jpg', name: 'lion' },
{ imgSrc: './Images/monkey.jpg', name: 'monkey' },
{ imgSrc: './Images/tiger.webp', name: 'tiger' },
{ imgSrc: './Images/zebra.png', name: 'zebra' },
{ imgSrc: './Images/crocodile.jpg', name: 'crocodile' },
{ imgSrc: './Images/elefant.jpg', name: 'elefant' },
{ imgSrc: './Images/giraffe.webp', name: 'giraffe' },
{ imgSrc: './Images/hippo.jpg', name: 'hippo' },
{ imgSrc: './Images/lion.jpg', name: 'lion' },
{ imgSrc: './Images/monkey.jpg', name: 'monkey' },
{ imgSrc: './Images/tiger.webp', name: 'tiger' },
{ imgSrc: './Images/zebra.png', name: 'zebra' }
];

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
                c.style.pointerEvents='none'
            })
        } else {
            flippedCards.forEach(c => {
                c.classList.remove('flipped');
                setTimeout(() => {
                    c.classList.remove('toggleCard');

                }, 1200)
            })
        }
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

    face.src = img.imgSrc;
    card.setAttribute('name', img.name)

    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener('click', (e) => {
        counter++;
        card.classList.toggle('toggleCard');
        cardChecker(e);
    })

    return card

}



