// SET UP PHASE
const main = document.querySelector('main');
const row = document.createElement('div');

// RETRIEVING PHASE
import source from './source.js';
console.log(main, source);

//PROCESSING PHASE
row.classList.add('row', 'g-3'); 
//Append 25 cards to row after generating one col div and one card div
for (let i = 0; i < 25; i++) {
	const col = document.createElement('div');
	col.classList.add('col');
	const card = document.createElement('div');
	card.classList.add('calendar-card');
	const cardText = document.createElement('span');
	cardText.classList.add('card-text');
	cardText.innerHTML = i + 1;
	const cardIcon = document.createElement('img');
	cardIcon.src = '../images/icons/' + source[i].icon + '.png';
	card.appendChild(cardIcon);
	card.appendChild(cardText);
	col.appendChild(card);
	row.appendChild(col);
};

// Append row div in page
main.appendChild(row);
