import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// galleryContainer.addEventListener("click", )

const renderGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join("");

function insertRenderedItems(string) {
  return galleryContainer.insertAdjacentHTML("beforeend", string);
}

insertRenderedItems(renderGallery);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
