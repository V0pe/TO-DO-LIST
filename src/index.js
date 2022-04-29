import './style.css';
import Enter from './enter.svg';
import Refresh from './refresh.svg';
import Option from './dots.svg';
import Trash from './trash.svg';

const header = document.querySelector('.header');
const add = document.querySelector('.add');


const refreshIcon = new Image();
refreshIcon.src = Refresh;
header.appendChild(refreshIcon);
const enterIcon = new Image();
enterIcon.src = Enter;
add.appendChild(enterIcon);



