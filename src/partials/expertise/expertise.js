import './expertise.scss';
import { TweenMax, Linear } from "gsap";

const blocks = [...document.querySelectorAll('.expertise-block')];
const menus = [...document.querySelectorAll('.dropDownMenu')];
const cards = [...document.querySelectorAll('.cardProject')];
const circleDev = document.querySelector('.svg-element-dev');
const circleUx = document.querySelector('.svg-element-ux');

const getParent = (el) => {
    while (!el.dataset.expertise) {
        el = el.parentNode;
    }
    return el;
}

const handleHover = el => {
    if (!el.dataset.expertise) {
        el = getParent(el)
    }
    blocks.forEach(block => {
        if (el.dataset.expertise === block.dataset.expertise) {
            block.classList.add('large');
            if (block.classList.contains('little')) {
                block.classList.remove('little');
            }
        }
        else if (el.dataset.expertise !== block.dataset.expertise) {
            block.classList.add('little');
            if (block.classList.contains('large')) {
                block.classList.remove('large');

            }
        }
        cards.forEach(card => {
            if (block.dataset.expertise === card.dataset.card) {
                if (block.classList.contains('little')) {
                    card.classList.add('hided');
                }
                else if (block.classList.contains('large')) {
                    card.classList.remove('hided');
                }
            }
        });
        menus.forEach(menu => {
            if (block.dataset.expertise === menu.dataset.menu) {
                if (block.classList.contains('little')) {
                    menu.classList.add('hided');
                }
                else if (block.classList.contains('large')) {
                    menu.classList.remove('hided');
                }
            }
        });
        if (el.dataset.expertise === 'ux') {
            circleUx.classList.add('rotate');
        }
        else if (circleUx.classList.contains('rotate')) {
            circleUx.classList.remove('rotate');
        }
        if (el.dataset.expertise === 'dev') {
            circleDev.classList.add('rotate');
        }
        else if (circleDev.classList.contains('rotate')) {
            circleDev.classList.remove('rotate');
        }


    });
    getRotationAngle(circleUx);

};

function getRotationAngle(target) {
    const obj = window.getComputedStyle(target, null);
    const matrix = obj.getPropertyValue('-webkit-transform') ||
        obj.getPropertyValue('-moz-transform') ||
        obj.getPropertyValue('-ms-transform') ||
        obj.getPropertyValue('-o-transform') ||
        obj.getPropertyValue('transform');

    let angle = 0;
    console.log(obj);


    if (matrix !== 'none') {
        const values = matrix.split('(')[1].split(')')[0].split(',');
        console.log(values);

        const a = values[0];
        const b = values[1];
        var radians = Math.atan2(b, a);
        if (radians < 0) {
            radians += (2 * Math.PI);
        }
        angle = Math.round(radians * (180 / Math.PI));
        // console.log(angle);
    }

    return (angle < 0) ? angle += 360 : angle;
}




blocks.forEach(block => {
    block.addEventListener('mouseover', function (e) {
        handleHover(e.target);
    });
});



const circlePath = document.getElementById("circlePath");
const lengthCirclePath = circlePath.getTotalLength();
const pathTextCurved = document.querySelector(".pathTextCurved");
let circlePath1 = document.getElementById("circlePath1");
let lengthCirclePath1 = circlePath1.getTotalLength();
let circle1 = document.getElementById("circle1");
let textCurved1 = document.getElementById("textCurved1");

pathTextCurved.setAttribute("textLength", lengthCirclePath - 20);
pathTextCurved1.setAttribute("textLength", lengthCirclePath1 - 20);


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