
const layerOne = document.getElementById('layer-one');
const myCircles = document.querySelectorAll ('.circles .group');

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
  const swapTwo = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout (swapTwo, this.textContent.length * 2 * 1000);
};

function changeLayerThree() {
  const swapThree = () => {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  }
  setTimeout (swapThree, this.textContent.length * 2 * 1000);
};

function changeLayerFour() {
  const swapFour = () => {
    layerFour.classList.add('hide');
    layerFour.classList.remove('hide');
  }
  setTimeout (swapFour, this.textContent.length * 2 * 1000);
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

//fortune layer
let fortuneRandom = ["Don't be afraid to take the plunge.", "Being a spendthrift is not healthy. Practice the act of giving and sharing.",
"Never lose the ability to find beauty in ordinary things.","Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
"The real kindness comes from within you.", "You don’t need strength to let go of something. What you really need is understanding.",
"The wise man is the one that makes you think that he is dumb.", "A stranger, is a friend you have not spoken to yet.",
"The man on the top of the mountain did not fall there.", "Jealousy doesn't open doors, it closes them!"];
console.log(fortuneRandom);

const fortuneQuote = document.getElementById ('user-fortune');

const randomQuotes = () => {
  fortuneQuote.innerHTML = fortuneRandom [Math.floor(Math.random() * fortuneRandom.length)];
};
for (let i = 0; i < mynumbbuttonsThree.length; i++) {
  mynumbbuttonsThree[i].addEventListener ('click', randomQuotes);
};
