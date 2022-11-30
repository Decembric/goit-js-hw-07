import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGallery = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
};

const makeElement = galleryItems.map(createGallery).join('');
const cardsContainer = document.querySelector(".gallery");

cardsContainer.insertAdjacentHTML('beforeend', makeElement);
cardsContainer.addEventListener('click', onClickImages);

function onClickImages(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return
  };

  const instance = basicLightbox.create(`
	<img src = "${event.target.dataset.source}" width = "800" height = "600">`);
  instance.show();

  cardsContainer.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      instance.close();
    };
  });
};

