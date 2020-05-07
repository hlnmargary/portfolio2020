import './loader.scss';

window.onload = function () {

  var loader = document.querySelector('#loader');
  var strings = loader.dataset.strings.split(',');
  var counter = 0;

  setInterval(function () {
    var logoTitle = strings[counter];
    if (counter < strings.length - 1) {
      counter++;
    }

    var logoRandom = ''; 0
    var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";

    function generateRandomTitle(i, logoRandom) {
      loader.classList.add('glitch');
      setTimeout(function () {
        loader.innerHTML = logoRandom;
        loader.dataset.text = logoRandom;
      }, i * 80);
    }

    for (var i = 0; i < logoTitle.length + 1; i++) {
      logoRandom = logoTitle.substr(0, i);
      for (var j = i; j < logoTitle.length; j++) {
        logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      generateRandomTitle(i, logoRandom);
      logoRandom = '';
    }
  }, 2100);
};
