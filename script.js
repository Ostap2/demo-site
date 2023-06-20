const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
  return card;
};

const Carousel = ({ children }) => {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  const navLeft = document.createElement('button');
  navLeft.className = 'nav left';
  navLeft.innerHTML = '<svg>...</svg>';
  const navRight = document.createElement('button');
  navRight.className = 'nav right';
  navRight.innerHTML = '<svg>...</svg>';
  const cards = Array.from(children);

  let active = 2;

  const updateCards = () => {
    cards.forEach((card, i) => {
      const cardContainer = card.querySelector('.card-container');
      cardContainer.style.setProperty('--active', i === active ? '1' : '0');
      cardContainer.style.setProperty('--offset', (active - i) / 3);
      cardContainer.style.setProperty('--direction', Math.sign(active - i));
      cardContainer.style.setProperty('--abs-offset', Math.abs(active - i) / 3);
      cardContainer.style.setProperty('pointer-events', active === i ? 'auto' : 'none');
      cardContainer.style.setProperty('opacity', Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1');
      cardContainer.style.setProperty('display', Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block');
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

const App = () => {
  const carousel = document.createElement('div');
  carousel.className = 'app';
  const carouselComponent = new Carousel();
  const cardComponents = Array.from(new Array(CARDS), (_, i) =>
    new Card({
      title: 'Card ' + (i + 1),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    })
  );

  carouselComponent.append(...cardComponents);
  carousel.append(carouselComponent);

  return carousel;
};

document.body.appendChild(App());
