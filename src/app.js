import Option from './dots.svg';
import Trash from './trash.svg';

class Engagement {
    constructor(){
        if (localStorage.getItem('tasks-storage') === null) {
            this.storage = [];
          }
          else{
          this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
          this.gettasks();
        }

    }//constrcuctor
    

    display(description, index){
        
        
        const todoList = document.querySelector('.todo-list');
        if(description !== ""){
            const templateHTML = `
            <div class="task" id="${index}">
            <input id="${index}" data="${description}" name="checkbox" type="checkbox">
           
            <p id="${index}" data="${description}"class="body-task">${description}</p>
            <img id="${index}" data="${description}" class = "taskOption" src="${Option}" alt="">
            <img id="${index}" data="${description}" class = "deleteOption" src="${Trash}" alt="">
        </div>`;
        
        todoList.insertAdjacentHTML("beforeend", templateHTML);
        }
    }//display

    gettasks(){
        if (!localStorage.getItem('tasks-storage')) {
            this.storage = [];
          }
        else{
        const store = JSON.parse(localStorage.getItem('tasks-storage'));
        store.map((tas) => {
        this.display(tas.description, tas.index);});
        }
     }//gettask

     editMode(e){
         let item = e.target;
         if (item.classList[0] === 'taskOption'){
             item.parentElement.classList.add('editMode');
             item.classList.add('hide');
             
             let index = e.target.parentElement.innerText;
             
             
            //  console.log(this.storage.indexOf(index));
             this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
             for (let i=0;i<this.storage.length;i++) {
               if (this.storage[i].description === index){
                   let inde = this.storage.indexOf(this.storage[i]);
                   let deleteOption = document.querySelectorAll('.deleteOption');
                   deleteOption[inde].classList.add('show');
                //    for (var i = 0; i < deleteOption1.length; i++) {
                    deleteOption[inde].addEventListener('click', (ind) => {
                        for (let j=0;j<this.storage.length;j++) {
                            if(inde < j){
                                this.storage[j].index -= 1;
                            }
                         }
                         e.target.parentElement.remove();
                         this.storage.splice(inde, 1);
                         localStorage.setItem('tasks-storage', JSON.stringify(this.storage));
                         const todoList = document.querySelector('.todo-list');
                         todoList.innerHTML = '';
                         window.location.reload();
        
                    
                    });
                }//if
              // } 
             };//edit for
            //  deleteOption[index].classList.add('show');


         }//if edit

         if(item.classList[0] === 'body-task'){
            item.classList.add('hide');
             let newform = document.createElement('form');
             newform.classList = 'newformadd';
             let newinput = document.createElement('input');
             newinput.classList = 'newinputadd';
             newform.appendChild(newinput);
             item.parentElement.appendChild(newform);
             newinput.value = item.innerText;
            
             this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
             for (let i=0;i<this.storage.length;i++) {
               if (this.storage[i].description === item.innerText){
                   let inde = this.storage.indexOf(this.storage[i]);
                   let taskOption1 = document.querySelectorAll('.taskOption');
                   taskOption1[inde].classList.add('hide');

            //  item.addEventListener('input', (e) => {
            //      console.log('yes');
            //      let description = e.target.innerText;
             
            //  })
               }
            } //for end
            newform.addEventListener('submit', () => {
                this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
                for (let j=0;j<this.storage.length;j++) {
                    if (this.storage[j].description === item.innerText){
                        console.log(this.storage.indexOf(this.storage[j]))
                        console.log(newinput.value);
                        this.storage[j].description = newinput.value;
                        localStorage.setItem('tasks-storage', JSON.stringify(this.storage));
                        const todoList = document.querySelector('.todo-list');
                         todoList.innerHTML = '';
                         window.location.reload();
                        // let taskOption1 = document.querySelectorAll('.taskOption');
                        // taskOption1[inde].classList.add('hide');
                    }
                }
     
            })//new form lister

         }// if body-task
         this.storage = JSON.parse(localStorage.getItem('tasks-storage'));
        //  console.log(this.storage)
     }
   

  action(){

    const todoInput = document.querySelector('#detail');
    let todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');
    todoButton.addEventListener('click',  (e) => {
        e.preventDefault();
        let inputTask = { description :`${detail.value}`,
                              completed:false,
                              index: `${this.storage.length + 1}` };
        this.storage.push(inputTask);
        localStorage.setItem('tasks-storage', JSON.stringify(this.storage));  
        todoList.innerHTML = '';
        this.gettasks();
        todoInput.value = '';
        todoInput.focus();

        
    })//addTodo);
    todoList.addEventListener('click', this.editMode);
  }

}//class

export default Engagement;
