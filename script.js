const main = document.getElementById('main');
const featuredDesserts = document.createElement('section');
featuredDesserts.className = 'main-section-desserts';
featuredDesserts.id = 'featureDesserts';
main.appendChild(featuredDesserts);

const featuredDessertsDIV = document.createElement('div');
featuredDessertsDIV.className = 'main-section-desserts-content';
featuredDesserts.appendChild(featuredDessertsDIV);

const featuredDessertsTitle = document.createElement('h3');
featuredDessertsTitle.className = 'main-section-desserts-title';
featuredDessertsTitle.textContent = 'FeaturedDesserts';
featuredDessertsDIV.appendChild(featuredDessertsTitle);

const featuredDessertsTitleUnderline = document.createElement('p');
featuredDessertsTitleUnderline.className = 'footer-top-underline display-flex-center';
featuredDessertsDIV.appendChild(featuredDessertsTitleUnderline);

const featuredDessertsTitleUnderlineSp = document.createElement('span');
featuredDessertsTitleUnderlineSp.className = 'footer-top-underline-span';
featuredDessertsTitleUnderlineSp.className = 'footer-top-underline-span';
featuredDessertsTitleUnderline.appendChild(featuredDessertsTitleUnderlineSp);

const cardUL = document.createElement('ul');
cardUL.className = 'main-section-desserts-cards';
cardUL.id = 'cards-show';
featuredDessertsDIV.appendChild(cardUL);

function ProjectCard(imageLink, imageAltText, title, descriprion, textContent) {
    this.image = {
        link: imageLink,
        altText: imageAltText,
    };
    this.title = title;
    this.descriprion = descriprion;
    this.textContent = textContent;
}

const desserts = [];

desserts.push(
    new ProjectCard(
        './images/cake.jpg',
        'Picture of Dessert',
        'Pudin cake',
        "Vanilla and chocolate pudin filled cookie's cake decorated like a traditional cake - special recipe with cookies'",
        'In 2001 Yve´s Konditorei won a first place in World Baking Compettitioon for the best bakeries on the Country, so is recognoized Country level for its merits',
    ),
);

desserts.push(
    new ProjectCard(
        './images/choco.png',
        'Picture of Dessert',
        'Chocolate Esculptures',
        "Made with the secret recipe of grandma Paula, tradition of the house'",
        'In 2001 Yve´s Konditorei won a first place in World Baking Compettitioon for the best bakeries on the Country, so is recognoized Country level for its merits',
    ),
);

desserts.push(
    new ProjectCard(
        './images/panacota.jpg',
        'Picture of Dessert',
        'Panacota',
        "Italian dessert, made with the best German ingredients to make its taste dedlicious like made in heaven",
        'In 2001 Yve´s Konditorei won a first place in World Baking Compettitioon for the best bakeries on the Country, so is recognoized Country level for its merits.',
    ),
);

desserts.push(
    new ProjectCard(
        './images/cupcake.jpg',
        'Picture of Dessert',
        'Personalized Cupcakes',
        "We always come with different ideas for our cupcakes, sometimes rainbow, other days galaxy, next day bicolor, it's always matter of creativity and creation",
        'In 2001 Yve´s Konditorei won a first place in World Baking Compettitioon for the best bakeries on the Country, so is recognoized Country level for its merits',
    ),
);

desserts.push(
    new ProjectCard(
        './images/birthdaycake.jpg',
        'Picture of Dessert',
        'Birthday, Wedding, celebration Cakes',
        "Our cakes are of the best selection in all the flavors possible, and delicious with our secret recipes",
        'In 2001 Yve´s Konditorei won a first place in World Baking Compettitioon for the best bakeries on the Country, so is recognoized Country level for its merits.',
    ),
);

desserts.push(
    new ProjectCard(
        './images/pralinem.jpg',
        'Picture of Dessert',
        'Pralinem',
        "Our chocolates are of the best selection with delicious fillers and sold in dozen or more for parties or events'",
        'In 2001 Yve´s Konditorei won a first place in World Baking Compettitioon for the best bakeries on the Country, so is recognoized Country level for its merits.',
    ),
);

for (let i = 0; i < desserts.length; i += 1) {
    const cardItem = document.createElement('li');
    cardItem.className = 'main-section-desserts-card';
    cardUL.appendChild(cardItem);

    const blackAndWhite = document.createElement('img');
    blackAndWhite.className = 'black-and-white';
    blackAndWhite.src = 'images/checkers.jpg';
    blackAndWhite.altText = 'Background image - checkers';
    cardItem.appendChild(blackAndWhite);

    const cardImg = document.createElement('img');
    cardImg.className = 'main-section-desserts-card-image';
    cardImg.src = desserts[i].image.link;
    cardImg.altText = desserts[i].image.altText;
    cardItem.appendChild(cardImg);

    const cardContent = document.createElement('div');
    cardContent.className = 'main-section-desserts-card-content';
    cardItem.appendChild(cardContent);

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'main-section-desserts-card-title';
    cardTitle.textContent = desserts[i].title;
    cardContent.appendChild(cardTitle);

    const cardDecription = document.createElement('p');
    cardDecription.className = 'main-section-desserts-card-description';
    cardDecription.textContent = desserts[i].descriprion;
    cardContent.appendChild(cardDecription);

    const cardText = document.createElement('p');
    cardText.className = 'main-section-desserts-card-text';
    cardText.textContent = desserts[i].textContent;
    cardContent.appendChild(cardText);
}

function checkWindowWidth() {
    for (let j = 0; j < 6; j += 1) {
        if (window.screen.width < 768 && j > 1) {
            document.getElementsByClassName('main-section-desserts-card')[
                j
            ].style.display = 'none';
        } else {
            document.getElementsByClassName('main-section-desserts-card')[
                j
            ].style.display = 'flex';
        }
    }
}

window.addEventListener('load', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);

const buttonMore = document.createElement('button');
buttonMore.className = 'main-button-more';
buttonMore.textContent = 'MORE';
featuredDessertsDIV.appendChild(buttonMore);

const buttonIcon = document.createElement('i');
buttonIcon.className = 'fas fa-chevron-down';
buttonMore.appendChild(buttonIcon);

let buttonStatus = false;

buttonMore.addEventListener('click', () => {
    if (buttonStatus === false) {
        for (let j = 0; j < 6; j += 1) {
            document.getElementsByClassName('main-section-desserts-card')[
                j
            ].style.display = 'flex';
        }

        buttonStatus = true;
        buttonMore.textContent = 'LESS';
        const buttonIcon = document.createElement('i');
        buttonIcon.className = 'fas fa-chevron-up';
        buttonMore.appendChild(buttonIcon);
    } else {
        for (let j = 2; j < 6; j += 1) {
            document.getElementsByClassName('main-section-desserts-card')[
                j
            ].style.display = 'none';
        }
        buttonStatus = false;
        buttonMore.textContent = 'MORE';
        const buttonIcon = document.createElement('i');
        buttonIcon.className = 'fas fa-chevron-down';
        buttonMore.appendChild(buttonIcon);
    }
});
