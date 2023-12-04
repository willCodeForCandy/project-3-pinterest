import { createCard } from '../galleryCard/galleryCard';
import './gallery.css';

export const populateGallery = (gallery, listOfImages) => {
  gallery.innerHTML = '';
  for (const image of listOfImages) {
    createCard(gallery, image);
  }
};

// export const populateGallery = (gallery, listOfImages) => {
//   gallery.innerHTML = '';
//   const div = document.createElement('div');
//   div.classList.add('column');
//   for (let i = 0; i < listOfImages.length / 2; i++) {
//     createCard(div, listOfImages[i]);
//   }
//   const div2 = document.createElement('div');
//   div2.classList.add('column');
//   for (let i = listOfImages.length / 2; i < listOfImages.length; i++) {
//     createCard(div2, listOfImages[i]);
//   }
//   gallery.append(div, div2);
// };
