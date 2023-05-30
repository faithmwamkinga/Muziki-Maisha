
const audi = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", function() {
  audi.play();
});

pauseBtn.addEventListener("click", function() {
  audi.pause();
});

var lyricsItems = document.querySelectorAll('.lyrics');
var audios = document.getElementById("audio");

for (var i = 0; i < lyricsItems.length; i++) {
  lyricsItems[i].addEventListener('click', function() {
    var time = this.getAttribute('data-time');
    audios.currentTime = time;
    audios.play();
  });
}


const lyrics = document.querySelector('.lyrics');
let x = 0;
let speedX = 0.5;

function moveLyrics() {
  x += speedX;

  if (x + lyrics.offsetWidth > window.innerWidth) {
    x = window.innerWidth - lyrics.offsetWidth;
    speedX = -speedX;
  }

  if (x < 0) {
    x = 0;
    speedX = -speedX;
  }

  lyrics.style.left = x + 'px';

  requestAnimationFrame(moveLyrics);
}

moveLyrics();
    
