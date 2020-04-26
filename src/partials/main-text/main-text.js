import './main-text.scss';

const spanList = [...document.querySelectorAll('span.hoverable')];
const cardList = [...document.querySelectorAll('.card')];

const getDataSet = el => el.dataset.cardid;

const displayCard = (cardId) => {
    cardList.forEach(card => {
        if (cardId === card.dataset.card) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
};

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


