import { populateGallery } from './src/components/gallery/gallery';
import { header } from './src/components/header/header';
import { searchBar } from './src/components/search/search';
import { galleryImages } from './src/data/mockGallery';
import { links } from './src/data/navLinks';
import './style.css';

const UNSPLASH_API = 'https://api.unsplash.com/';
const USER_KEY = 'ozAt0h0qcEqfiT1ieUs-gkTP-RUQjIwvvO9aaqhabug';
const mainGallery = document.createElement('main');
const body = document.querySelector('body');
body.append(header('/assets/logo-50.png', 'Rockterest', links));
body.append(mainGallery);
searchBar();
//todo: BORRAR ESTA LINEA CUANDO EL PROYECTO ESTE COMPLETO
populateGallery(mainGallery, galleryImages);
const searchInput = document.querySelector('input');

const getPics = (apiUrl, key, query) => {
  let url = '';
  if (query) {
    url = `${apiUrl}search/photos?query=${query}&client_id=${key}`;
  } else {
    url = `${apiUrl}/photos?client_id=${key}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((photos) => {
      populateGallery(mainGallery, photos.results);
    });
};
const searchPhotos = (e) => {
  console.log(e.target.value);
  getPics(UNSPLASH_API, USER_KEY, e.target.value);
};
searchInput.addEventListener('change', searchPhotos);
// getPics(UNSPLASH_API, USER_KEY);
