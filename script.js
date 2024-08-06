const menu = [
    { name: 'Latte', price: '$4.99', image: 'https://via.placeholder.com/200' },
    { name: 'Cappuccino', price: '$3.99', image: 'https://via.placeholder.com/200' },
    { name: 'Espresso', price: '$2.99', image: 'https://via.placeholder.com/200' },
    { name: 'Mocha', price: '$5.99', image: 'https://via.placeholder.com/200' },
    { name: 'Americano', price: '$3.49', image: 'https://via.placeholder.com/200' },
    { name: 'Filter Coffee', price: '$1.49', image: 'https://via.placeholder.com/200' }
];

const coffeemenu = document.getElementById("coffee-menu");

menu.forEach(value=>{
    const card = document.createElement("div");
    card.innerHTML=`
    <img src = "${value.image}" alt="${value.name}">
    <p> ${value.name}<p>
    <p> ${value.price}</P>

    `
    coffeemenu.appendChild(card)

});
