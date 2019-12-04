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
  var swap = function swap() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

function changeLayerThree() {
  var swap = function swap() {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
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
//  function loopThroughTwo () {
//    const flashBgTwo = () => { this.classList.toggle ('pulse');
//    const numStringValue = this.firstElementChild.textContent;
//    for (let i = 0; i < Number(numStringValue) * 2; i++) {
//      setTimeout (flashbgTwo, i * 1000);
//    }
//  };