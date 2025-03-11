console.log('js ok');

// SET UP PHASE
const main = document.querySelector('main');
const row = document.createElement('div');
row.classList.add('row'); 

console.log(main, source);

//PROCESSING PHASE
//Append 25 cards to row after generating one col div and one card div
for (let i = 0; i < 25; i++) {
	const col = document.createElement('div');
	col.classList.add('col');
	const card = document.createElement('div');
	card.classList.add('calendar-cell');
	card.innerHTML = i + 1;
	col.appendChild(card);
	row.appendChild(col);
};

// Append row div in page
main.appendChild(row);
