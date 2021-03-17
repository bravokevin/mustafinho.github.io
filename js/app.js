const instruments = document.querySelectorAll(".instrument")
const keys = Array.from(document.querySelectorAll('.key'));

// class TheInstruments  {
//   constuctor(){
//     this.name = 
//     this.sound =
//   }
// }




const KEY = {
  'A': 65,
  'S': 83,
  'D': 68,
  'F': 70,
  'G': 71,
  'H': 72,
  'J': 74,
  'K': 75,
  'L': 76,
};

const INSTRUMENTS = {
	"Drumm" : "drumm",
	"Guitar" : "guitar",
	"Piano" : "piano",
	"Bass" : "bass",
	"Funny Sounds": "funny_sounds"
}


function removeTransition(e) {
  // if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function playSoundOnTouch(e) {
  const audio = document.querySelector(`audio[data-key="${KEY[e.path[0].innerText]}"]`);
  const key = document.querySelector(`div[data-key="${KEY[e.path[0].innerText]}"]`);
    console.log(key, "sonidda", e.path)

  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}


function selectInstrument(e){
  const instrument = document.querySelector(`div[data-instrument="${INSTRUMENTS[e.path[0].innerText]}"]`);
  selectedInstrument = instrument.dataset.instrument
  console.log(instrument)
  console.log(selectedInstrument)
  if (selectedInstrument == "drumm"){
  }
  else if (selectedInstrument == "guitar") {
  }
  else if (selectedInstrument == "piano") {
  }
  else if (selectedInstrument == "bass") {
  }
  else if (selectedInstrument == "funny_sounds") {
  }
}

instruments.forEach((instrument) => {
	instrument.addEventListener("click", selectInstrument)
})

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('touchstart', playSoundOnTouch, false);
  key.addEventListener('click', playSoundOnTouch);
});
window.addEventListener('keydown', playSound);
