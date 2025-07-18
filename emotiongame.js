const pairs = [
  { id: 1, type: 'word', value: 'Happy' },
  { id: 2, type: 'emoji', value: '😊', match: 'Happy' },
  { id: 3, type: 'word', value: 'Sad' },
  { id: 4, type: 'emoji', value: '😢', match: 'Sad' },
  { id: 5, type: 'word', value: 'Angry' },
  { id: 6, type: 'emoji', value: '😠', match: 'Angry' }
];

let flipped = [];
let matched = [];
const board = document.getElementById('game-board');
const status = document.getElementById('game-status');

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  const cards = shuffle([...pairs]);
  board.innerHTML = '';
  cards.forEach((card, index) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.id = card.id;
    div.dataset.value = card.value;
    div.dataset.type = card.type;
    div.innerHTML = '?';
    div.onclick = () => flipCard(div, card);
    board.appendChild(div);
  });
}

function flipCard(cardElement, cardData) {
  if (flipped.length >= 2 || cardElement.classList.contains('matched')) return;

  cardElement.innerHTML = cardData.value;
  cardElement.classList.add('flipped');
  flipped.push({ element: cardElement, data: cardData });

  if (flipped.length === 2) {
    setTimeout(checkMatch, 600);
  }
}

function checkMatch() {
  const [card1, card2] = flipped;
  const isMatch =
    (card1.data.type === 'word' && card2.data.type === 'emoji' && card1.data.value === card2.data.match) ||
    (card2.data.type === 'word' && card1.data.type === 'emoji' && card2.data.value === card1.data.match);

  if (isMatch) {
    card1.element.classList.add('matched');
    card2.element.classList.add('matched');
    matched.push(card1, card2);
  } else {
    card1.element.innerHTML = '?';
    card2.element.innerHTML = '?';
    card1.element.classList.remove('flipped');
    card2.element.classList.remove('flipped');
  }

  flipped = [];

  if (matched.length === pairs.length) {
    status.textContent = '🎉 You matched all emotions!';
  }
}

createBoard();
