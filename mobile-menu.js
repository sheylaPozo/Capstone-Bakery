const body = document.getElementById('html');
const menu = document.createElement('div');
menu.className = 'mobile-menu-style';
body.appendChild(menu);

const icon = document.createElement('i');
icon.className = 'fas fa-times fa-2x';
icon.id = 'close';
menu.appendChild(icon);

const menuList = document.createElement('ul');
menuList.className = 'menu-list';
menuList.id = 'mobileMenuLinks';
menu.appendChild(menuList);
const home = document.createElement('li');
const homeLink = document.createElement('a');
homeLink.className = 'blur-effect';
homeLink.textContent = 'Home';
homeLink.href = 'index.html';
home.appendChild(homeLink);
menuList.appendChild(home);

const about = document.createElement('li');
const aboutLink = document.createElement('a');
aboutLink.className = 'blur-effect';
aboutLink.textContent = 'About';
aboutLink.href = 'about.html';
about.appendChild(aboutLink);
menuList.appendChild(about);

const program = document.createElement('li');
const programLink = document.createElement('a');
programLink.className = 'blur-effect';
programLink.textContent = 'Program';
programLink.href = '#';
program.appendChild(programLink);
menuList.appendChild(program);

const bestsellers = document.createElement('li');
const bestsellersLink = document.createElement('a');
bestsellersLink.className = 'blur-effect';
bestsellersLink.textContent = 'Bestsellers';
bestsellersLink.href = '#';
bestsellers.appendChild(bestsellersLink);
menuList.appendChild(bestsellers);

const newDesserts = document.createElement('li');
const newdessertsLink = document.createElement('a');
newDessertsLink.className = 'blur-effect';
newDessertsLink.textContent = 'New Desserts';
newDessertsLink.href = '#';
newDesserts.appendChild(newDessertsLink);
menuList.appendChild(newDesserts);

const join = document.createElement('li');
const joinLink = document.createElement('a');
joinLink.className = 'blur-effect';
joinLink.textContent = 'Join';
joinLink.href = '#';
join.appendChild(joinLink);
menuList.appendChild(join);

const socialMedia = document.createElement('li');
const socialMediaLink = document.createElement('a');
socialMediaLink.className = 'mobile-menu-social-media';
socialMediaLink.href = '#';
socialMedia.appendChild(socialMediaLink);
menuList.appendChild(socialMedia);

const socialMediaFacebook = document.createElement('i');
socialMediaFacebook.className = 'fab fa-facebook-f';
socialMediaFacebook.id = 'mobileMenuFacebook';
socialMediaLink.appendChild(socialMediaFacebook);

const socialMediaTwitter = document.createElement('i');
socialMediaTwitter.className = 'fab fa-twitter';
socialMediaTwitter.id = 'mobileMenuTwitter';
socialMediaLink.appendChild(socialMediaTwitter);

document.getElementById('hamburger').addEventListener('click', () => {
    menu.style.display = 'block';
    document.getElementById('body').style.filter = 'blur(5px)';
});

icon.addEventListener('click', () => {
    menu.style.display = 'none';
    document.getElementById('body').style.filter = 'none';
});