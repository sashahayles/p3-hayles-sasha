
const layerOne = document.getElementById('layer-one');
const myCircles = document.querySelectorAll ('.circles #group');

const layerTwo =  document.getElementById('layer-two');
const mynumbuttons = document.getElementsByClassName('block-2');

const layerThree = document.getElementById ('layer-three');
const mynumbbuttonsThree = document.getElementsByClassName ('block-3');

const layerFour = document.getElementById ('layer-four');


//The Functionality
function loopThrough () {
  const flashBg = () => this.classList.toggle('pulse');
  for (let i=0; i < this.textContent.length * 2; i++) {
    setTimeout(flashBg, i * 1000);
  }
};
function loopThroughTwo () {
  const flashbgTwo = () => this.classList.toggle('pulse');
  for (let i=0; i < Number(this.textContent); i++) {
    setTimeout(flashbgTwo, i * 1000);
  }
};

function loopThroughThree () {
  const flashbgThree = () => this.classList.toggle('pulse');
  for (let i=0; i < Number(this.textContent); i++) {
    setTimeout(flashbgThree, i * 1000);
  }
};

//changelayer
function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout (swap, this.textContent.length * 2 * 1000);
};

function changeLayerTwo() {
  const swap = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout (swap, this.textContent.length * 2 * 1000);
};

function changeLayerThree() {
  const swap = () => {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  }
  setTimeout (swap, this.textContent.length * 2 * 1000);
};
//The Event Listener
for (let i = 0; i < myCircles.length; i++) {
  myCircles[i].addEventListener('click', loopThrough);
  myCircles[i].addEventListener('click', changeLayer);
};

for (let i = 0; i < mynumbuttons.length; i++) {
  mynumbuttons[i].addEventListener('click', loopThroughTwo);
  mynumbuttons[i].addEventListener('click', changeLayerTwo);
};

for (let i = 0; i < mynumbuttons.length; i++) {
  mynumbbuttonsThree[i].addEventListener('click', loopThroughThree);
  mynumbbuttonsThree[i].addEventListener('click', changeLayerThree);
};
//  function loopThroughTwo () {
//    const flashBgTwo = () => { this.classList.toggle ('pulse');
//    const numStringValue = this.firstElementChild.textContent;
//    for (let i = 0; i < Number(numStringValue) * 2; i++) {
//      setTimeout (flashbgTwo, i * 1000);
//    }
//  };
