const myCircles = document.querySelectorAll ('.circles #group');
const mynumbuttons = document.getElementsByClassName('block-2');

//The Functionality
function loopThrough () {
  const flashBg = () => this.classList.toggle('pulse');
  for (let i=0; i< this.textContent.length * 2; i++) {
    setTimeout(flashBg, i * 1000);
  };
};

//The Event Listener
for (let i = 0; i < myCircles.length; i++) {
  myCircles[i].addEventListener('click', loopThrough)
};
