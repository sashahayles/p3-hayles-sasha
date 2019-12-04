'use strict';

var layerOne = document.getElementById('layer-one');
var myCircles = document.querySelectorAll('.circles #group');

var layerTwo = document.getElementById('layer-two');
var mynumbuttons = document.getElementsByClassName('block-2');

var layerThree = document.getElementById('layer-three');
var mynumbbuttonsThree = document.getElementsByClassName('block-3');

var layerFour = document.getElementById('layer-four');

//The Functionality
function loopThrough() {
  var _this = this;

  var flashBg = function flashBg() {
    return _this.classList.toggle('pulse');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(flashBg, i * 1000);
  }
};
function loopThroughTwo() {
  var _this2 = this;

  var flashbgTwo = function flashbgTwo() {
    return _this2.classList.toggle('pulse');
  };
  for (var i = 0; i < Number(this.textContent); i++) {
    setTimeout(flashbgTwo, i * 1000);
  }
};

function loopThroughThree() {
  var _this3 = this;

  var flashbgThree = function flashbgThree() {
    return _this3.classList.toggle('pulse');
  };
  for (var i = 0; i < Number(this.textContent); i++) {
    setTimeout(flashbgThree, i * 1000);
  }
};

//changelayer
function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

function changeLayerTwo() {
  var swapTwo = function swapTwo() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swapTwo, this.textContent.length * 2 * 1000);
};

function changeLayerThree() {
  var swapThree = function swapThree() {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swapThree, this.textContent.length * 2 * 1000);
};

function changeLayerFour() {
  var swapFour = function swapFour() {
    layerFour.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swapFour, this.textContent.length * 2 * 1000);
};
//The Event Listener
for (var i = 0; i < myCircles.length; i++) {
  myCircles[i].addEventListener('click', loopThrough);
  myCircles[i].addEventListener('click', changeLayer);
};

for (var _i = 0; _i < mynumbuttons.length; _i++) {
  mynumbuttons[_i].addEventListener('click', loopThroughTwo);
  mynumbuttons[_i].addEventListener('click', changeLayerTwo);
};

for (var _i2 = 0; _i2 < mynumbuttons.length; _i2++) {
  mynumbbuttonsThree[_i2].addEventListener('click', loopThroughThree);
  mynumbbuttonsThree[_i2].addEventListener('click', changeLayerThree);
};

//fortune layer
var fortuneRandom = ["Don't be afraid to take the plunge.", "Being a spendthrift is not healthy. Practice the act of giving and sharing.", "Never lose the ability to find beauty in ordinary things.", "Courage is not simply one of the virtues, but the form of every virtue at the testing point.", "The real kindness comes from within you.", "You don’t need strength to let go of something. What you really need is understanding.", "The wise man is the one that makes you think that he is dumb.", "A stranger, is a friend you have not spoken to yet.", "The man on the top of the mountain did not fall there.", "Jealousy doesn't open doors, it closes them!"];
console.log(fortuneRandom);

var fortuneQuote = document.getElementById('user-fortune');

var randomQuotes = function randomQuotes() {
  fortuneQuote.innerHTML = fortuneRandom[Math.floor(Math.random() * fortuneRandom.length)];
};
for (var _i3 = 0; _i3 < mynumbbuttonsThree.length; _i3++) {
  mynumbbuttonsThree[_i3].addEventListener('click', randomQuotes);
};