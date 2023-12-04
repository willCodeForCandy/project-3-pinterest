import './galleryCard.css';

export const createCard = (
  parentElement,
  { urls: imgSrc, description, alt_description, user }
) => {
  const card = document.createElement('article');
  card.classList.add('card');
  card.innerHTML = `
<div class="img-container">
  <img src="${imgSrc.small}" alt="${alt_description}" loading="lazy" />
</div>
<div class="description">
  <h3>${description ?? ''}</h3>
  <div class="user flex-container">
    <div class="img-container"><img src=${user.profile_image.medium}/></div>
    <h4>${user.name}</h4>
  </div>
</div>
`;
  parentElement.append(card);
};

/* <div class="overlay">
<div class='save-btn'>Save</div>
<div class='share-btn'>Share</div>
<div class='options-btn'>More options</div>
</div> */
