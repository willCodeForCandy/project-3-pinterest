import { footer } from './src/components/footer/footer';
import { populateGallery } from './src/components/gallery/gallery';
import { header } from './src/components/header/header';
import { galleryImages } from './src/data/mockGallery';

import { links } from './src/data/navLinks';
import './style.css';

const UNSPLASH_API = 'https://api.unsplash.com/';
const USER_KEY = 'ozAt0h0qcEqfiT1ieUs-gkTP-RUQjIwvvO9aaqhabug';
const mainGallery = document.createElement('main');
const body = document.querySelector('body');
body.append(header('/assets/logo-50.png', 'Rockterest', links));
body.append(mainGallery);
body.append(footer());
const searchInput = document.querySelector('input');

const getPics = (apiUrl, key, query) => {
  let url = '';
  if (query) {
    url = `${apiUrl}search/photos?query=${query}&client_id=${key}`;
  } else {
    url = `${apiUrl}search/photos?query=puppy&client_id=${key}`;
  }
  fetch(url)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((photos) => {
      // console.log(photos);
      return populateGallery(mainGallery, photos.results);
    })
    .catch((err) => {
      console.log(err);
    });
};
const searchPhotos = (e) => {
  getPics(UNSPLASH_API, USER_KEY, e.target.value);
};
searchInput.addEventListener('change', searchPhotos);
getPics(UNSPLASH_API, USER_KEY);
// getPics(UNSPLASH_API, USER_KEY, galleryImages);
