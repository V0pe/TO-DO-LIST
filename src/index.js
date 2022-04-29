import './style.css';
import Enter from './enter.svg';
import Refresh from './refresh.svg';

import Engagement from './app.js';

const header = document.querySelector('.header');

const refreshIcon = new Image();
refreshIcon.src = Refresh;
header.appendChild(refreshIcon);
const enterIcon = new Image();
enterIcon.src = Enter;

const formBtn = document.querySelector('.todo-button');
formBtn.appendChild(enterIcon);

const Engage = new Engagement();

Engage.action();
