'use strict';

var myCircles = document.querySelectorAll('.circles #group');
var layerOne = document.getElementById('layer-one');

var layerTwo = document.getElementById('layer-two');
var mynumbuttons = document.getElementsByClassName('block-2');

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
  myCircles[i].addEventListener('click', loopThroughTwo);
};