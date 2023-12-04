import { header, links } from './src/components/header/header';
import './style.css';

const app = document.querySelector('#app');
app.append(header('/assets/logo-50.png', 'Rockterest', links));
