import './expertise.scss';
import {TweenMax, Linear} from "gsap";

const blocks = [...document.querySelectorAll('.expertise-block')];

const getParent = (el) => {
    while (!el.dataset.expertise) {
        el = el.parentNode;
    }
    return el;
}

const handleClick = el => {
    if (!el.dataset.expertise) {
        el = getParent(el)
    }
    blocks.forEach(block => {
        if (el.dataset.expertise === block.dataset.expertise) block.style.width = '70%';
        else if (el.dataset.expertise !== block.dataset.expertise) block.style.width = '30%';
    });
};

blocks.forEach(block => {
    block.addEventListener('click', function (e) {
        handleClick(e.target);
    });
});

const circlePath = document.getElementById("circlePath");
const lengthCirclePath = circlePath.getTotalLength();
console.log(lengthCirclePath)
const pathTextCurved = document.querySelector(".pathTextCurved");

pathTextCurved.setAttribute("textLength", lengthCirclePath - 20);

const hover = TweenMax.to(textCurved, 10, {
    transformOrigin: "50% 50%",
    rotation: "360",
    repeat: -1,
    ease: Linear.easeNone
});

let circlePath1 = document.getElementById("circlePath1");
let lengthCirclePath1 = circlePath1.getTotalLength();
let circle1 = document.getElementById("circle1");
let textCurved1 = document.getElementById("textCurved1");


pathTextCurved1.setAttribute("textLength", lengthCirclePath1 - 20);
const hover1 = TweenMax.to(textCurved1, 10, {
    transformOrigin: "50% 50%",
    rotation: "360",
    repeat: -1,
    ease: Linear.easeNone
});

const subnavTitles = [...document.querySelectorAll('.subnavigation-name')];
const subnavParts = [...document.querySelectorAll('.subnavigation-part')];


subnavTitles.forEach(subnavTitle => {
    subnavTitle.addEventListener('click', function (e) {
        subnavParts.forEach(subnavPart => {
            if (subnavTitle.dataset.nav == subnavPart.dataset.part) {
                subnavPart.classList.add('displayed');
            } else if (subnavPart.classList.contains('displayed')) {
                subnavPart.classList.remove('displayed');
            }
        });
    });
});