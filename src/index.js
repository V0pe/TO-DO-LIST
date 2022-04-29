import './style.css';
import Enter from './enter.svg';
import Refresh from './refresh.svg';


const header = document.querySelector('.header');
const add = document.querySelector('.add');


const refreshIcon = new Image();
refreshIcon.src = Refresh;
header.appendChild(refreshIcon);
const enterIcon = new Image();
enterIcon.src = Enter;

const formBtn = document.querySelector('.todo-button');
formBtn.appendChild(enterIcon);


import Engagement from './app.js'

let Engage = new Engagement;

Engage.action();
