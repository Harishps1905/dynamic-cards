const everyCards = document.querySelectorAll('.cards .card');
const cards = document.getElementById("cards");

let names = ['helan', 'arun', 'rahul', 'remo', 'anniyan'];
let images = ['./images/testimonials-1.jpg', './images/testimonials-2.jpg', './images/testimonials-3.jpg', './images/testimonials-4.jpg', './images/testimonials-5.jpg'];

// everyCards.forEach(card => {
//     card.addEventListener('load', function () {
//         createCard(names[i], images[i]);
//     })
// });
//create card
//append childs like img and h1
const createCard = (nameArr, imagearr) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'card');
    cards.appendChild(card);

    const image = document.createElement('img');
    image.setAttribute('class', 'image');
    image.setAttribute('src', imagearr);
    card.append(image);

    const name = document.createElement('h1');
    name.setAttribute('class', 'name');
    name.textContent = nameArr;
    card.append(name);


};

for (let i = 0; i < names.length; i++) {
    createCard(names[i], images[i]);
    
}