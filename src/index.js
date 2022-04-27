
import Enter from './enter.svg';
import Refresh from './refresh.svg';
import Option from './dots.svg';
import './style.css';
import _ from 'lodash';

let taskList = document.querySelector('.tasks');
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
    },
]

for (let task of tasks){
    let templateHTML = `<div class="task" id="${task.index}">
    <input type="checkbox">
    <p>${task.description}</p>
    <img src="./dots.svg" alt="">
</div>`
    taskList.insertAdjacentHTML("beforeend", templateHTML);
}



