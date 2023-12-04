import { createCard } from '../galleryCard/galleryCard';
import './gallery.css';

export const populateGallery = (gallery, listOfImages) => {
  for (const image of listOfImages) {
    createCard(gallery, image);
  }
};
