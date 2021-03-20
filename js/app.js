const instruments = document.querySelectorAll(".instrument")
const keys = Array.from(document.querySelectorAll('.key'));
let selectedInstrument = ""
const instrumentsText = Array.from(document.querySelectorAll(".sound"))
const keysContainer = document.querySelector(".keys_container")
const instrumentContainer = document.querySelector(".instrument_container")
const welcomeContainer = document.querySelector(".welcome_container")
const btnBack = document.querySelector(".backBtn")

const notFound = document.querySelector(".notFound")

let isInPage = false
const subtitle = document.querySelector(".h2")

var instrumentTextContent = instrumentsText.textContent

var guitarTexts = ["c", "d", "e", "f", "g", "a", "b"];

var drummTexts = ["boom", "clap", "hihat", "kick", "openhat", "ride", "Snare", "tink", "tom"];

var funnyTexts = ["air horn", "bong", "bonk", "negative sound", "pop up", "no", "yeiih"];


var guitarAudiosMajor = [];
guitarAudiosMajor["65"] = new Audio("../sounds/guitar/cleanchord-Cm.wav");
guitarAudiosMajor["83"] = new Audio("../sounds/guitar/cleanchord-D.wav");
guitarAudiosMajor["68"] = new Audio("../sounds/guitar/cleanchord-E.wav");
guitarAudiosMajor["70"] = new Audio("../sounds/guitar/cleanchord-F.wav");
guitarAudiosMajor["71"] = new Audio("../sounds/guitar/cleanchord-G.wav");
guitarAudiosMajor["72"] = new Audio("../sounds/guitar/cleanchord-A.wav");
guitarAudiosMajor["74"] = new Audio("../sounds/guitar/cleanchord-B.wav");

var guitarAudiosMinor = [];
guitarAudiosMinor["65"] = new Audio("../sounds/guitar/cleanchord-Cm.wav");
guitarAudiosMinor["83"] = new Audio("../sounds/guitar/cleanchord-Dm.wav");
guitarAudiosMinor["68"] = new Audio("../sounds/guitar/cleanchord-Em.wav");
guitarAudiosMinor["70"] = new Audio("../sounds/guitar/cleanchord-Fm.wav");
guitarAudiosMinor["71"] = new Audio("../sounds/guitar/cleanchord-Gm.wav");
guitarAudiosMinor["72"] = new Audio("../sounds/guitar/cleanchord-Am.wav");
guitarAudiosMinor["74"] = new Audio("../sounds/guitar/cleanchord-Bm.wav");

var funnyAudios = [];
funnyAudios["65"] = new Audio("../sounds/funny/Air-horn-noise.mp3");
funnyAudios["83"] = new Audio("../sounds/funny/Bong-sound-effect.mp3");
funnyAudios["68"] = new Audio("../sounds/funny/Bonk-sound-effect.mp3");
funnyAudios["70"] = new Audio("../sounds/funny/Negative-sound-effect.mp3");
funnyAudios["71"] = new Audio("../sounds/funny/Pop-up-sound-effect.mp3");
funnyAudios["72"] = new Audio("../sounds/funny/Saying-no-sound-effect.mp3");
funnyAudios["74"] = new Audio("../sounds/funny/Yeet-sound-effect.mp3");

var drummAudios = [];
drummAudios["65"] = new Audio("../sounds/battery/boom.wav");
drummAudios["83"] = new Audio("../sounds/battery/clap.wav");
drummAudios["68"] = new Audio("../sounds/battery/hihat.wav");
drummAudios["70"] = new Audio("../sounds/battery/kick.wav");
drummAudios["71"] = new Audio("../sounds/battery/openhat.wav");
drummAudios["72"] = new Audio("../sounds/battery/ride.wav");
drummAudios["74"] = new Audio("../sounds/battery/snare.wav");
drummAudios["75"] = new Audio("../sounds/battery/tink.wav");
drummAudios["76"] = new Audio("../sounds/battery/tom.wav");

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

subtitle.classList.add("h2dissapear")

  if(selectedInstrument == "guitar"){

    if(e.shiftKey){
      const audio = guitarAudiosMinor[e.keyCode];
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();

    }
    else{
    const audio = guitarAudiosMajor[e.keyCode];
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

  }
    }
    else if(selectedInstrument == "funny_sounds"){
      const audio = funnyAudios[e.keyCode];
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }

    else if(selectedInstrument == "drumm"){
      const audio = drummAudios[e.keyCode];
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }
}

function playSoundOnTouch(e) {
  if(selectedInstrument == "guitar"){
      const audio = guitarAudiosMinor[KEY[e.path[0].innerText]];
      const key = document.querySelector(`div[data-key="${KEY[e.path[0].innerText]}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();

    }
    else if(selectedInstrument == "funny_sounds"){
      const audio = funnyAudios[KEY[e.path[0].innerText]];
      const key = document.querySelector(`div[data-key="${KEY[e.path[0].innerText]}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }

    else if(selectedInstrument == "drumm"){
      const audio = drummAudios[KEY[e.path[0].innerText]];
      const key = document.querySelector(`div[data-key="${KEY[e.path[0].innerText]}"]`);
      if (!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }
}


function selectInstrument(e){

  keys.forEach(key => {
    key.style.display =""
  })

  isInPage = true
  const instrument = document.querySelector(`div[data-instrument="${INSTRUMENTS[e.path[0].innerText]}"]`);

  selectedInstrument = instrument.dataset.instrument

  if (selectedInstrument == "drumm"){
    drummTexts.forEach(e =>{
      for(i in instrumentsText){
        let name = instrumentsText[i]
        if (i == name.dataset.number) {
          name.textContent = drummTexts[i]
        }
      }
    })
  }

  else if (selectedInstrument == "guitar") {
    guitarTexts.forEach(e =>{
      for(i in instrumentsText){
        let name = instrumentsText[i]
        if (i == name.dataset.number) {
          name.textContent = guitarTexts[i]
        }
      }
    })
  }

  else if (selectedInstrument == "funny_sounds") {
    funnyTexts.forEach(e =>{
      for(i in instrumentsText){
        let name = instrumentsText[i]
        if (i == name.dataset.number) {
          name.textContent = funnyTexts[i]
        }
      }
    })
  }
//para borrar las teclas sobresalientes
  let toDelete = keys.map(key =>{
    let borralo = key.lastElementChild
    if(borralo.textContent == ""){
        return key
    }
  })

  let toDeleteFilter = toDelete.filter(x => x !== undefined);
  if(toDeleteFilter.length >= 0){
    toDeleteFilter.forEach(del => {
      del.style.display ="none"
    })
  }

  btnBack.classList.add("btndDisplaying")
  keysContainer.classList.add("keysContainerDisplay")
  welcomeContainer.style.display = "none"
  instrumentContainer.style.display = "none"  

  notFound.classList.remove("notFoundDisplay")

  if (selectedInstrument == "piano") {
    notFound.classList.add("notFoundDisplay")
    keysContainer.classList.remove("keysContainerDisplay")
  }

  else if (selectedInstrument == "bass") {
  notFound.classList.add("notFoundDisplay")
  keysContainer.classList.remove("keysContainerDisplay")
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




btnBack.addEventListener('click', back =>{
  if(back.target.matches("button")){
    keysContainer.classList.remove("keysContainerDisplay")
    welcomeContainer.display = ''
    btnBack.classList.remove("btndDisplaying")
    instrumentContainer.style.display = ""
    subtitle.classList.remove("h2dissapear")
    notFound.classList.remove("notFoundDisplay")

  }
})
