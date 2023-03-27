import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    acc += `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img class="gallery__image"
         src="${preview}"
         data-source="${original}" alt="${description}"/></a></li>`;
    return acc;
  },
  ""
);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", openOriginImage);

function openOriginImage(event) {
  event.preventDefault();
  const originalImagePath = event.target.dataset.source;
  console.log(originalImagePath);
  const instance =
    basicLightbox.create(`<img src="${originalImagePath}" width="800" height="600">
   `);
  instance.show();
}
