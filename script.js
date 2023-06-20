const CARDS = 10;
const MAX_VISIBILITY = 3;

const createCard = ({ title, content }) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
  return card;
};

const createCarousel = () => {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  const navLeft = document.createElement('button');
  navLeft.className = 'nav left';
  navLeft.innerHTML = '<svg>...</svg>';
  const navRight = document.createElement('button');
  navRight.className = 'nav right';
  navRight.innerHTML = '<svg>...</svg>';
  const cards = Array.from({ length: CARDS }, (_, i) =>
    createCard({
      title: 'Card ' + (i + 1),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    })
  );

  let active = 2;

  const updateCards = () => {
    cards.forEach((card, i) => {
      const offset = (active - i) / 3;
      const absOffset = Math.abs(active - i) / 3;
      const direction = Math.sign(active - i);
      const cardContainer = card.querySelector('.card-container');
      cardContainer.style.setProperty('--offset', offset);
      cardContainer.style.setProperty('--abs-offset', absOffset);
      cardContainer.style.setProperty('--direction', direction);
      cardContainer.style.transform = `rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -5rem))`;
      cardContainer.style.filter = `blur(calc(var(--abs-offset) * 1rem))`;
      cardContainer.style.pointerEvents = active === i ? 'auto' : 'none';
      cardContainer.style.opacity = Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1';
      cardContainer.style.display = Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block';
    });
  };

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
