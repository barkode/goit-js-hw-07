import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img loading="lazy" class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
