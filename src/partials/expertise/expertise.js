import './expertise.scss';

const blocks = [...document.querySelectorAll('.expertise-block')];

const handleClick = el => {
    blocks.forEach(block => {
        if (el.dataset.expertise == block.dataset.expertise) block.style.width ='70%'
        else block.style.width ='30%'
    })
};

console.log(blocks)
blocks.forEach(block => {
    block.addEventListener('click', function (e) {
        handleClick(e.target)
    })
})