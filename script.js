
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  if (todoInput.value !== '') {
    const task = document.createElement('div');
    task.classList.add('task');
    
    const taskText = document.createElement('span');
    taskText.textContent = todoInput.value;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
      task.remove();
    });

    task.appendChild(taskText);
    task.appendChild(deleteButton);
    todoList.appendChild(task);

    todoInput.value = ''; 
  }
});
