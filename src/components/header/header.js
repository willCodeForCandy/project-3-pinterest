import { searchBar } from '../search/search';
import './header.css';

export const header = (logoUrl, brandName, links) => {
  const header = document.createElement('header');
  header.classList.add('flex-container');
  const logo = document.createElement('img');
  logo.src = logoUrl;
  logo.alt = `${brandName} logo`;
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('flex-container');
  for (const link of links) {
    const li = document.createElement('li');
    li.id = link.name.toLowerCase();
    const anchor = document.createElement('a');
    anchor.href = link.url;

    if (link.icon) {
      const img = document.createElement('img');
      img.src = link.icon;
      img.alt = link.name;
      li.className = 'icon';
      anchor.append(img);
    } else {
      anchor.textContent = link.name;
    }
    li.append(anchor);
    ul.append(li);
  }

  nav.append(ul);
  header.append(logo);
  header.append(nav);
  return header;
};
