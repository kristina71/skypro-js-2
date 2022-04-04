import './style.css';
import { startGame } from './game.js';

const buttonStart = document.querySelector('.buttonStart');
let levelValue = 1;
const level1 = document.querySelector('.level1');
const level2 = document.querySelector('.level2');
const level3 = document.querySelector('.level3');

level1.addEventListener('click', (event) => {
    level2.style.border = 'none';
    level3.style.border = 'none';
    event.target.style.border = '2px #004980 solid';
    levelValue = 1;
});

level2.addEventListener('click', (event) => {
    level1.style.border = 'none';
    level3.style.border = 'none';
    event.target.style.border = '2px #004980 solid';
    levelValue = 2;
});

level3.addEventListener('click', (event) => {
    level1.style.border = 'none';
    level2.style.border = 'none';
    event.target.style.border = '2px #004980 solid';
    levelValue = 3;
});

buttonStart.addEventListener('click', () => {
    alert(levelValue);
    startGame(levelValue * 6);
});
