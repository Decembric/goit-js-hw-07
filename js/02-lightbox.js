import { galleryItems } from './gallery-items.js';
// Change code below this line
const createGallery = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
};
console.log(galleryItems);
const makeElement = galleryItems.map(createGallery).join('');
const cardsContainer = document.querySelector(".gallery");

cardsContainer.insertAdjacentHTML('beforeend', makeElement);
cardsContainer.addEventListener('click', onClickImages);

function onClickImages(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return
  };
};

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', });
