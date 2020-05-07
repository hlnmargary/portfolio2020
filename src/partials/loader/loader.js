import './loader.scss';

window.onload = function () {

  let loader = document.querySelector('#loader');
  let strings = loader.dataset.strings.split(',');
  let counter = 0;

  setInterval(function () {
    let logoTitle = strings[counter];
    if (counter < strings.length) {
      counter++;
    }

    let logoRandom = '';
    let possible = "?=+*&^%$#@!)}";

    function generateRandomTitle(i, logoRandom) {
      loader.classList.add('glitch');
      setTimeout(function () {
        loader.innerHTML = logoRandom;
        loader.dataset.text = logoRandom;
      }, i * 55);
    }

    for (let i = 0; i < logoTitle.length + 1; i++) {
      logoRandom = logoTitle.substr(0, i);
      for (let j = i; j < logoTitle.length; j++) {
        logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      generateRandomTitle(i, logoRandom);
      logoRandom = '';
    }
  }, 2100);
};