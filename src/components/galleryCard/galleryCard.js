import './galleryCard.css';

export const createCard = (
  parentElement,
  { urls: imgSrc, description, alt_description, user }
) => {
  const card = document.createElement('article');
  card.innerHTML = `
<div class="img-container">
  <img src="${imgSrc.small}" alt="${alt_description}" loading="lazy" />
</div>
<div>
  <h3>${description ?? ''}</h3>
  <div>
    <img src=${user.profile_image.medium}/>
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
