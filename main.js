import { header } from './src/components/header/header';
import { searchBar } from './src/components/search/search';
import { links } from './src/data/navLinks';
import './style.css';

const app = document.querySelector('#app');
app.append(header('/assets/logo-50.png', 'Rockterest', links));
searchBar();
