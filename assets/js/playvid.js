let btn = document.querySelector('.vid-btn');
let close = document.querySelector('.close');
let clip = document.querySelector('.clip');
let video = document.querySelector('video');

window.onload = video.pause();

btn.onclick = function() {
  btn.classList.add('start');
  clip.classList.add('start');
  setTimeout(function() {
    video.play();
  }, 1000);
}

close.onclick = function() {
  video.pause();
  video.currentTime = 0;
  btn.classList.remove('start');
  clip.classList.remove('start');

}
