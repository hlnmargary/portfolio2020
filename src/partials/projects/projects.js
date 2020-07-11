import './projects.scss';
import { TweenMax, Linear } from "gsap";

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.project-image');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, 0.2, {
        x: e.pageX - 15,
        y: e.pageY - 15
    })
    TweenMax.to($smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7
    })
}

// Hover an element
function onMouseHover() {
    TweenMax.to($bigBall, 0.3, {
        scale: 4
    })
}
function onMouseHoverOut() {
    TweenMax.to($bigBall, 0.3, {
        scale: 1
    })
}

const circles = [...document.querySelectorAll('.circle')];
const navs = [...document.querySelectorAll('.nav-item')];
const projects = [...document.querySelectorAll('.project')];

const handleClick = el => {
    navs.forEach((nav, i) => {
        if (circles[i].classList.contains('rotate')) circles[i].classList.remove('rotate')
        if (projects[i].classList.contains('active')) projects[i].classList.remove('active')
        if (el.closest('li').dataset.number === projects[i].dataset.number) projects[i].classList.add('active')
    });
    el.closest('svg').classList.add('rotate')
}

navs.forEach(nav => {
    nav.addEventListener('click', function (e) {
        handleClick(e.target);
    });
});


let circlePath1 = document.getElementById("circlePath1");
let circlePath2 = document.getElementById("circlePath2");
let circlePath3 = document.getElementById("circlePath3");
let circlePath4 = document.getElementById("circlePath4");
let circlePath5 = document.getElementById("circlePath5");
let lengthCirclePath1 = circlePath1.getTotalLength();
let lengthCirclePath2 = circlePath2.getTotalLength();
let lengthCirclePath3 = circlePath3.getTotalLength();
let lengthCirclePath4 = circlePath4.getTotalLength();
let lengthCirclePath5 = circlePath4.getTotalLength();

document.getElementById("pathTextCurved1").setAttribute("textLength", lengthCirclePath1 - 20);
document.getElementById("pathTextCurved2").setAttribute("textLength", lengthCirclePath2 - 20);
document.getElementById("pathTextCurved3").setAttribute("textLength", lengthCirclePath3 - 20);
document.getElementById("pathTextCurved4").setAttribute("textLength", lengthCirclePath4 - 20);
document.getElementById("pathTextCurved5").setAttribute("textLength", lengthCirclePath5 - 20);