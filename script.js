
const CARDS = 10;
const MAX_VISIBILITY = 3;
const ANIMATION_DURATION = 300;

const createCard = ({ title, content }) => {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;

  cardContainer.appendChild(card);

  return cardContainer;
};

const createCarousel = () => {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  const navLeft = document.createElement('button');
  navLeft.className = 'nav left';
  navLeft.innerHTML = '&lt;';
  const navRight = document.createElement('button');
  navRight.className = 'nav right';
  navRight.innerHTML = '&gt;';


  const cardContents = [
    'TXT 1',
    'TXT 2',
    'TXT 3',
    'TXT 4',
    'TXT 5',
    'TXT 6',
    'TXT 7',
    'TXT 8',
    'TXT 9',
    'TXT 10',
  ];

  const cards = cardContents.map((content, i) =>
    createCard({
      title: 'Card ' + (i + 1),
      content: content,
    })
  );

  let active = 2;

  const updateCards = () => {
    cards.forEach((card, i) => {
      const offset = (active - i) / 3;
      const absOffset = Math.abs(active - i) / 3;
      const direction = Math.sign(active - i);
      const cardContainer = card;
      cardContainer.style.setProperty('--offset', offset);
      cardContainer.style.setProperty('--abs-offset', absOffset);
      cardContainer.style.setProperty('--direction', direction);
      cardContainer.style.transform = `rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -5rem))`;
      cardContainer.style.filter = `blur(calc(var(--abs-offset) * 1rem))`;
      cardContainer.style.pointerEvents = active === i ? 'auto' : 'none';
      cardContainer.style.opacity = Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1';
      cardContainer.style.display = Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block';
    });


    const isFirstCard = active === 0;
    const isLastCard = active === cards.length - 1;


    if (isFirstCard) {
      navLeft.style.transition = `opacity ${ANIMATION_DURATION}ms ease-out`;
      navLeft.style.opacity = '0';
    } else {
      navLeft.style.transition = `opacity ${ANIMATION_DURATION}ms ease-out`;
      navLeft.style.opacity = '1';
    }


    if (isLastCard) {
      navRight.style.transition = `opacity ${ANIMATION_DURATION}ms ease-out`;
      navRight.style.opacity = '0';
    } else {
      navRight.style.transition = `opacity ${ANIMATION_DURATION}ms ease-out`;
      navRight.style.opacity = '1';
    }
  };

  updateCards();

  navLeft.addEventListener('click', () => {
    if (active > 0) {
      active--;
      updateCards();
    }
  });

  navRight.addEventListener('click', () => {
    if (active < cards.length - 1) {
      active++;
      updateCards();
    }
  });

  carousel.append(navLeft, navRight, ...cards);

  return carousel;
};

const app = document.getElementById('app');
app.appendChild(createCarousel());



window.addEventListener('load', function() {
  animateBubbles();
});

