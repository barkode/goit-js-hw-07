import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    acc += `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img loading="lazy" class="gallery__image"
         src="${preview}"
         data-source="${original}" alt="${description}" /></a></li>`;
    return acc;
  },
  ""
);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", openOriginImage);

function openOriginImage(event) {
  event.preventDefault();
  const ifExistClass = event.target.classList.contains("gallery__image");
  if (ifExistClass) {
    const originalImagePath = event.target.dataset.source;
    const instance =
      basicLightbox.create(`<img src="${originalImagePath}" width="800" height="600">
   `);
    instance.show();

    gallery.addEventListener("keydown", closeModalWindowEsc);

    function closeModalWindowEsc(event) {
      if (event.code === "Escape") {
        instance.close();
        gallery.removeEventListener("keydown", closeModalWindowEsc);
      }
    }
  }
}
