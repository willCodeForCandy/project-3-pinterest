import './footer.css';
const footerLinks = [
  'About',
  'Blog',
  'Businesses',
  'Careers',
  'Developers',
  'Removals',
  'Privacy Policy',
  'Personalized Ads',
  'Your Privacy Rights',
  'Terms'
];
const toggleFooter = (e) => {
  const footer = document.querySelector('.footer');
  footer.classList.toggle('hidden');
  e.target.classList.toggle('animate');
  setTimeout(() => {
    e.target.classList.toggle('animate');
  }, 200);
};
export const footer = () => {
  const footer = document.createElement('footer');
  const footerToggle = document.createElement('div');
  const footerIcon = document.createElement('img');
  footerIcon.src = '/assets/question-sign.png';
  footerToggle.append(footerIcon);
  const ul = document.createElement('ul');
  ul.classList.add('flex-container', 'footer', 'hidden');
  for (const item of footerLinks) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.target = '_blank';
    a.textContent = item;
    li.append(a);
    ul.append(li);
  }
  footer.append(footerToggle, ul);
  footerToggle.addEventListener('click', toggleFooter);
  return footer;
};
