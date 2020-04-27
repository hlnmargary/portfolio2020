import './main-text.scss';

const spanList = [...document.querySelectorAll('span.hoverable')];
const cardContainer = [...document.querySelectorAll('.main-zone-wrap')];
const cardList = [...document.querySelectorAll('.main-zone-card')];

const getDataSet = el => el.dataset.cardid;

const displayCard = (cardId) => {
    cardContainer.forEach(card => {
        if (cardId === card.dataset.card) card.style.display = 'block';
        else card.style.display = 'none';
    });
};

const cardsFunction = () => {
    spanList.forEach(span => {
        span.addEventListener('mouseenter', function () {
            span.classList.add('hovered');
            const cardId = getDataSet(span);
            displayCard(cardId);
        });
        span.addEventListener('mouseleave', function () {
            span.classList.remove('hovered');
        });
    });
};

const resetCard = () => {
    const activeCard = document.querySelector('.main-zone-card.active');
    activeCard.style.transform = `rotateX(0) rotateY(0)`;
    activeCard.classList.remove("active");
};

const checkMouseEnter = () => {
    cardList.forEach(container => {
        container.addEventListener('mouseenter', function (e) {
            e.target.classList.add("active");
            cardAnimate(e.target);
        });
    });
};

const cardAnimate = element => {
    element.addEventListener('mousemove', function (event) {
        const {offsetX, offsetY} = event;
        let X;
        let Y;
        X = ((offsetX - (element.clientWidth/2)) / 4) / 4;
        Y = (-(offsetY - (element.clientHeight/2)) / 4) / 4;
        element.style.transform = `rotateX(${X.toFixed(2)}deg) rotateY(${Y.toFixed(2)}deg)`;
    });
    element.addEventListener('mouseleave', resetCard);
};

checkMouseEnter();
cardsFunction();
