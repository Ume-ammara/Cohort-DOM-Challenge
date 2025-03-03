/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById('taskInput')
const addButton = document.getElementById('addButton')
const taskList = document.querySelector('.task-list')
const totalTasks = document.getElementById('totalTasks')
const completedTasks = document.getElementById('completedTasks')

let totalCount  = 0;
let completeTask = 0;


addButton.addEventListener(('click'), ()=>{
     let textValue = taskInput.value
     if(textValue === ''){
        return
     }
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-button')
    deleteBtn.innerText = 'Delete'

    const list = document.createElement('li')
    list.classList.add('task-item')
    
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = textValue;

   

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("complete-checkbox");

    list.appendChild(checkBox)
    list.appendChild(taskText)
    list.appendChild(deleteBtn)
    taskList.appendChild(list)

    taskInput.value = ''
    totalCount++;
    totalTasks.innerHTML = `Total tasks: ${totalCount}`


   deleteBtn.addEventListener('click', () => {
      if (checkBox.checked) {
          completeTask--;  // Decrease completed count if task was completed
      }
      totalCount--;  // Decrease total count

      list.remove();
      totalTasks.innerHTML = `Total tasks: ${totalCount}`;
      completedTasks.innerHTML = `Completed: ${completeTask}`;
  });

      // Update completed tasks count when checked/unchecked
      checkBox.addEventListener('change', () => {
         if (checkBox.checked) {
             completeTask++;
         } else {
             completeTask--;
         }
         completedTasks.innerHTML = `Completed: ${completeTask}`;
     });
 
})
