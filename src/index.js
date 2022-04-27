
import Enter from './enter.svg';
import Refresh from './refresh.svg';
import Option from './dots.svg';
import './style.css';

let taskList = document.querySelector('.tasks');
let header = document.querySelector('.header');
let add = document.querySelector('.add');
const tasks = [
    {
        description :'Iron clothes',
        completed:false,
        index: 0,
    },
    {
        description :'watch ball',
        completed:false,
        index: 1,
    }
]


for (let task of tasks){
    let templateHTML = `<div class="task" id="${task.index}">
    <input type="checkbox">
    <p>${task.description}</p>
    <img src="${Option}" alt="">
</div>`
    taskList.insertAdjacentHTML("beforeend", templateHTML);
}

const refreshIcon = new Image();
  refreshIcon.src = Refresh;
  header.appendChild(refreshIcon);
  const enterIcon = new Image();
  enterIcon.src = Enter;
  add.appendChild(enterIcon);



alert(("first time"));




