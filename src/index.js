import './style.css';
import Enter from './enter.svg';
import Refresh from './refresh.svg';
import Option from './dots.svg';

const taskList = document.querySelector('.tasks');
const header = document.querySelector('.header');
const add = document.querySelector('.add');
const tasks = [
  {
    description: 'Iron clothes',
    completed: false,
    index: 0,
  },
  {
    description: 'watch ball',
    completed: false,
    index: 1,
  },
];

tasks.map((task) => {
  const templateHTML = `<div class="task" id="${task.index}">
    <input type="checkbox">
    <p>${task.description}</p>
    <img src="${Option}" alt="">
</div>`;
  taskList.insertAdjacentHTML('beforeend', templateHTML);
  return true;
});

const refreshIcon = new Image();
refreshIcon.src = Refresh;
header.appendChild(refreshIcon);
const enterIcon = new Image();
enterIcon.src = Enter;
add.appendChild(enterIcon);
