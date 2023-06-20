import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const carouselTrack = document.querySelector('.carousel__track');
const carouselItems = [];

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.alt = description;
  galleryImage.dataset.source = original;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsMarkup);

galleryItems.forEach((item) => {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel__item');

  const carouselImage = document.createElement('img');
  carouselImage.src = item.preview;
  carouselImage.alt = item.description;

  carouselItem.appendChild(carouselImage);
  carouselItems.push(carouselItem);
});

carouselTrack.append(...carouselItems);

const carousel = document.querySelector('.carousel');
const carouselWidth = carousel.clientWidth;
let currentIndex = 0;

function slideTo(index) {
  carouselTrack.style.transform = `translateX(-${index * carouselWidth}px)`;
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  slideTo(currentIndex);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  slideTo(currentIndex);
}

const leftArrow = document.querySelector('.carousel__arrow--left');
const rightArrow = document.querySelector('.carousel__arrow--right');

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);
