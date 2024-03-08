import { getRandomNumber } from './randomNumber';

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const random = getRandomNumber(colors);

  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

