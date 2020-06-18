import './projects.scss';
import { TweenMax, Linear } from "gsap";

const circles = [...document.querySelectorAll('.circle')];
const navs = [...document.querySelectorAll('.nav-item')];
const projects = [...document.querySelectorAll('.project')];

const handleClick = el => {
    navs.forEach((nav, i) => {
        if (circles[i].classList.contains('rotate')) circles[i].classList.remove('rotate')
        if (projects[i].classList.contains('active')) projects[i].classList.remove('active')
        if (el.closest('li').dataset.number === projects[i].dataset.number) projects[i].classList.add('active')
    });
    el.closest('svg').classList.add('rotate');
}

navs.forEach(nav => {
    nav.addEventListener('click', function (e) {
        handleClick(e.target);
    });
});

// const circlePath = document.getElementById("circlePath");
// const lengthCirclePath = circlePath.getTotalLength();
// const pathTextCurved = document.querySelector(".pathTextCurved");
// let circlePath1 = document.getElementById("circlePath1");
// let lengthCirclePath1 = circlePath1.getTotalLength();
// let circle1 = document.getElementById("circle1");
// let textCurved1 = document.getElementById("textCurved1");

// pathTextCurved.setAttribute("textLength", lengthCirclePath - 20);
// pathTextCurved1.setAttribute("textLength", lengthCirclePath1 - 20);

// let circlePath = document.getElementById("circlePath");
// let lengthCirclePath = circlePath.getTotalLength();
// let circle = document.getElementById("circle");
// let textCurved = document.getElementById("textCurved");

// document.getElementById("pathTextCurved").setAttribute(
//     "textLength", lengthCirclePath - 20);
// const hover = TweenMax.to(textCurved, 40, {
//     transformOrigin: "50% 50%",
//     rotation: "-360",
//     repeat: -1,
//     ease: Linear.easeNone
// });

