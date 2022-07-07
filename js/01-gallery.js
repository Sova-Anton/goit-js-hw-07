import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", onItemsGalleryClick);

const renderItems = (galleryItems) =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    )
    .join("");

const insertRenderedItems = (string) =>
  galleryContainer.insertAdjacentHTML("beforeend", string);

insertRenderedItems(renderItems(galleryItems));

function onItemsGalleryClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">   
`);
  instance.show();
// Закрытие через кнопку Close    
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}

// const renderItems = (galleryItems) =>
//   galleryItems.reduce(
//     (acc, { preview, original, description }) =>
//       acc +
//       `<a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>`,
//     ""
//   );
