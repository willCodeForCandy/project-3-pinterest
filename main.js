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

// fetch(
//   UNSPLASH_API +
//     'photos' +
//     `?page=${Math.floor(Math.random() * 10 + 1)}&` +
//     'client_id=' +
//     USER_KEY
// )
//   .then((res) => res.json())
//   .then((photos) => populateGallery(mainGallery, photos));
