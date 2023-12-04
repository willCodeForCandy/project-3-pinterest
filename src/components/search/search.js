import './search.css';

export const searchBar = () => {
  const searchContainer = document.querySelector('#search');
  const input = document.createElement('input');
  input.placeholder = 'Search';
  searchContainer.classList.remove('icon');
  searchContainer.classList.add('flex-container');
  searchContainer.append(input);
};
