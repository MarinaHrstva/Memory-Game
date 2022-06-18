const section = document.querySelector('section');
// const playerClicksElement = document.querySelector('span');
let playerClicks = 0;

// playerClicksElement.textContent = playerClicks;

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
        card.classList.toggle('toggleCard');
    })

    return card

}

randomize(data);

data.map(cardGenerator).forEach(c => {
    section.appendChild(c)
})

