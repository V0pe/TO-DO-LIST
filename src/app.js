/* eslint-disable no-plusplus */

import Option from './dots.svg';
import Trash from './trash.svg';

class Engagement {
  constructor() {
    this.storage = localStorage.getItem('tasks-storage') ? JSON.parse(localStorage.getItem('tasks-storage')) : [];
    this.gettasks();
  }

  static display = (description, index) => {
    const todoList = document.querySelector('.todo-list');
    if (description !== '') {
      const templateHTML = `
            <div class="task" id="${index}">
            <input class="checkbox" id="${index}" data="${description}" name="checkbox" type="checkbox">
           
            <p id="${index}" data="${description}"class="body-task">${description}</p>
            <img id="${index}" data="${description}" class = "taskOption" src="${Option}" alt="">
            <img id="${index}" data="${description}" class = "deleteOption" src="${Trash}" alt="">
        </div>`;

      todoList.insertAdjacentHTML('beforeend', templateHTML);
    }
  }

  gettasks = () => {
    if (!localStorage.getItem('tasks-storage')) {
      this.storage = [];
    } else {
      this.storage.map((tas) => {
        Engagement.display(tas.description, tas.index);
        return true;
      });
    }
  }

  editMode = (e) => {
    const item = e.target;
    if (item.classList[0] === 'taskOption') {
      item.parentElement.classList.add('editMode');
      item.classList.add('hide');

      const index = e.target.parentElement.innerText;
      this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].description === index) {
          const inde = this.storage.indexOf(this.storage[i]);
          const deleteOption = document.querySelectorAll('.deleteOption');
          deleteOption[inde].classList.add('show');
          deleteOption[inde].addEventListener('click', () => {
            e.target.parentElement.remove();
            this.storage.splice(inde, 1);
            for (let i = 0; i < this.storage.length; i++) {
              this.storage[i].index = i + 1;
            }
            localStorage.setItem('tasks-storage', JSON.stringify(this.storage));
            const todoList = document.querySelector('.todo-list');
            todoList.innerHTML = '';
            this.gettasks();
          });
        }
      }
    }

    if (item.classList[0] === 'body-task') {
      item.classList.add('hide');
      const newform = document.createElement('form');
      newform.classList = 'newformadd';
      const newinput = document.createElement('input');
      newinput.classList = 'newinputadd';
      newform.appendChild(newinput);
      item.parentElement.appendChild(newform);
      newinput.value = item.innerText;

      this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].description === item.innerText) {
          const inde = this.storage.indexOf(this.storage[i]);
          const taskOption1 = document.querySelectorAll('.taskOption');
          taskOption1[inde].classList.add('hide');
        }
      }
      newform.addEventListener('submit', () => {
        this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
        for (let j = 0; j < this.storage.length; j++) {
          if (this.storage[j].description === item.innerText) {
            this.storage[j].description = newinput.value;
            localStorage.setItem('tasks-storage', JSON.stringify(this.storage));
            const todoList = document.querySelector('.todo-list');
            todoList.innerHTML = '';
            this.gettasks();
          }
        }
      });
    }

    if (item.classList[0] === 'checkbox') {
      const index = e.target.parentElement.innerText;
      this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].description === index) {
          const inde = this.storage.indexOf(this.storage[i]);
          const checkOption = document.querySelectorAll('.body-task');
          checkOption[inde].classList.toggle('strike');
          this.storage[i].completed = !this.storage[i].completed;
          localStorage.setItem('tasks-storage', JSON.stringify(this.storage));
          const clearall = document.querySelector('button[type=button]');
          clearall.addEventListener('click', () => {
            this.storage = this.storage.filter((check) => check.completed === false);
            this.storage.map((item, i) => {
              item.index = i + 1;
              return true;
            });
            localStorage.setItem('tasks-storage', JSON.stringify(this.storage));
            const todoList = document.querySelector('.todo-list');
            todoList.innerHTML = '';
            this.gettasks();
          });
        }
      }
    }
    this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
  }

  action() {
    const todoInput = document.querySelector('#detail');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');
    todoButton.addEventListener('click', (e) => {
      e.preventDefault();
      const inputTask = {
        description: `${todoInput.value}`,
        completed: false,
        index: `${this.storage.length + 1}`,
      };
      if (inputTask.description !== '') {
        this.storage.push(inputTask);
      }
      localStorage.setItem('tasks-storage', JSON.stringify(this.storage));
      todoList.innerHTML = '';
      this.gettasks();
      todoInput.value = '';
      todoInput.focus();
    });
    todoList.addEventListener('click', this.editMode);
  }
}

export default Engagement;