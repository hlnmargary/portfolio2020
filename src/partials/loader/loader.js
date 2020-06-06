import './loader.scss';

let loader = document.querySelector('#loader');
let loaderContainer = document.querySelector('.loaderContainer');
//loader


window.onload = function () {

  var strings = loader.dataset.strings.split(',');
  var counter = 0;
  // setTimeout(() => {
  //   loader.classList.add('hideLoader');
  // }, 1000);


  setInterval(function () {

    var logoRandom = '';
    var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    var logoTitle = strings[counter];
    if (counter < 4) {
      counter++;
      generateRandomTitle();
    } else {
      loaderContainer.style.display = "none";
    }


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
}
