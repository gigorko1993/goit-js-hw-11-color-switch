"use strict";
import colors from './color.js';

const bodyEl = document.querySelector('body');
const startButtonEl = document.querySelector('[data-action="start"]');
const stopButtonEl = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let numberOfColors = colors.length - 1;

startButtonEl.addEventListener('click', onBgColorChange);
stopButtonEl.addEventListener('click', onBgColorStopChange);
stopButtonEl.disabled = true;

let colorTimer = null;

function onBgColorChange() {
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
  colorTimer = setInterval(bodyColorChange, 1000);
}

function onBgColorStopChange() {
  clearInterval(colorTimer);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

function bodyColorChange () {
  bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, numberOfColors)];
  
}
