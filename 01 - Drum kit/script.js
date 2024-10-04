"use strict";

window.addEventListener("keydown", (e) => {
  const keyCode = e.key.toUpperCase();
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const keyEl = document.querySelector(`.key[data-key='${keyCode}']`);
  if(!audio || !keyEl) return
  audio.currentTime = 0;
  audio.play();
  keyEl.classList.add("playing");
  
});
window.addEventListener("keyup", (e) => {
  const keyCode = e.key.toUpperCase();
  const keyEl = document.querySelector(`.key[data-key='${keyCode}']`);
  keyEl?.classList.remove("playing");
});
