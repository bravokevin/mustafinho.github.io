const instruments = document.querySelectorAll(".instrument")
const keys = Array.from(document.querySelectorAll('.key'));
let selectedInstrument = ""

class TheInstruments  {
  constuctor(nombre){
    this.name = nombre
    this.audios = new Audio()
    this.audios.src = audios[this.name]
  }
}

var guitarAudios = [];
guitarAudios["65"] = new Audio("../../sounds/guitar/cleanchord-Cm.wav");
guitarAudios["83"] = new Audio("../../sounds/guitar/cleanchord-D.wav");
guitarAudios["68"] = new Audio("../../sounds/guitar/cleanchord-E.wav");
guitarAudios["70"] = new Audio("../../sounds/guitar/cleanchord-F.wav");
guitarAudios["71"] = new Audio("../../sounds/guitar/cleanchord-G.wav");
guitarAudios["72"] = new Audio("../../sounds/guitar/cleanchord-A.wav");
guitarAudios["74"] = new Audio("../../sounds/guitar/cleanchord-B.wav");

var funnyAudios = [];
funnyAudios["65"] = new Audio("../../sounds/funny/Air-horn-noise.mp3");
funnyAudios["83"] = new Audio("../../sounds/funny/Bong-sound-effect.mp3");
funnyAudios["68"] = new Audio("../../sounds/funny/Bonk-sound-effect.mp3");
funnyAudios["70"] = new Audio("../../sounds/funny/Negative-sound-effect.mp3");
funnyAudios["71"] = new Audio("../../sounds/funny/Pop-up-sound-effect.mp3");
funnyAudios["72"] = new Audio("../../sounds/funny/Saying-no-sound-effect.mp3");
funnyAudios["74"] = new Audio("../../sounds/funny/Yeet-sound-effect.mp3");

var drummAudios = [];
drummAudios["65"] = new Audio("../../sounds/battery/boom.wav");
drummAudios["83"] = new Audio("../../sounds/battery/clap.wav");
drummAudios["68"] = new Audio("../../sounds/battery/hihat.wav");
drummAudios["70"] = new Audio("../../sounds/battery/kick.wav");
drummAudios["71"] = new Audio("../../sounds/battery/openhat.wav");
drummAudios["72"] = new Audio("../../sounds/battery/ride.wav");
drummAudios["74"] = new Audio("../../sounds/battery/snare.wav");
drummAudios["75"] = new Audio("../../sounds/battery/tink.wav");
drummAudios["76"] = new Audio("../../sounds/battery/tom.wav");

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

  if(selectedInstrument == "guitar"){
    const audio = guitarAudios[e.keyCode];
    console.log("tis es te audio",audio)

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    setTimeout(()=>{
      audio.pause();
      audio.currentTime = 0;}, 4000)
    }
    else if(selectedInstrument == "funny_sounds"){
      const audio = funnyAudios[e.keyCode];
      console.log("tis es te audio",audio)
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }

    else if(selectedInstrument == "drumm"){
      const audio = drummAudios[e.keyCode];
      console.log("tis es te audio",audio)
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }
}

// function playSoundOnTouch(e) {
//   const audio = document.querySelector(`audio[data-key="${KEY[e.path[0].innerText]}"]`);
//   const key = document.querySelector(`div[data-key="${KEY[e.path[0].innerText]}"]`);
//     console.log(key, "sonidda", e.path)

//   if (!audio) return;

//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// }


function selectInstrument(e){
  const instrument = document.querySelector(`div[data-instrument="${INSTRUMENTS[e.path[0].innerText]}"]`);
  selectedInstrument = instrument.dataset.instrument
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
  // key.addEventListener('touchstart', playSoundOnTouch, false);
  // key.addEventListener('click', playSoundOnTouch);
});
window.addEventListener('keydown', playSound);
