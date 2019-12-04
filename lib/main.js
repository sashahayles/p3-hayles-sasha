'use strict';

var myCircles = document.querySelectorAll('.circles #group');
var layerOne = document.getElementById('layer-one');

var layerTwo = document.getElementById('layer-two');
var mynumbuttons = document.getElementsByClassName('block-2');

var layerThree = document.getElementById('layer-three');
var mynumbbuttonsThree = document.getElementsByClassName('block-3');

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
  };
};

//changelayer
function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
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
  //  myCircles[i].addEventListener('click', changeLayer);
};
//  function loopThroughTwo () {
//    const flashBgTwo = () => { this.classList.toggle ('pulse');
//    const numStringValue = this.firstElementChild.textContent;
//    for (let i = 0; i < Number(numStringValue) * 2; i++) {
//      setTimeout (flashbgTwo, i * 1000);
//    }
//  };