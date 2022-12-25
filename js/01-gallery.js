import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markupGallary = galleryItems
  .map(
    ({ preview, original, description }) =>
      `  <div class="gallery__item">
        <a class="gallery__link"
         href="${original}"
          ><img class="gallery__image" 
          src="${preview}" alt="${description}" data-source="${original}"
        /></a>
      </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markupGallary);

gallery.addEventListener("click", onClickImg);

function onClickImg(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt="${evt.target.dataset.picturedesc}">
`);

  instance.show();

  console.dir(evt.target);
}
