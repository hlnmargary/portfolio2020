import './expertise.scss';
import { TweenMax, Linear } from "gsap";


let circlePath = document.getElementById("circlePath");
let lengthCirclePath = circlePath.getTotalLength();
let circle = document.getElementById("circle");
let textCurved = document.getElementById("textCurved");

document.getElementById("pathTextCurved").setAttribute(
    "textLength", lengthCirclePath - 20);
const hover = TweenMax.to(textCurved, 40, {
    transformOrigin: "50% 50%",
    rotation: "-360",
    repeat: -1,
    ease: Linear.easeNone
});

