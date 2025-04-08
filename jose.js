const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


taskInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});

addTaskBtn.addEventListener('click', addTask);


function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return; 

 
  const li = document.createElement('li');

  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTask);

  
  const span = document.createElement('span');
  span.textContent = text;

  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑'; 
  deleteBtn.addEventListener('click', removeTask);

  
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  
  taskList.insertBefore(li, taskList.firstChild);

 
  taskInput.value = "";
}


function toggleTask(event) {
  const li = event.target.parentElement;
  if (event.target.checked) {
    li.classList.add('completed');
    
    taskList.removeChild(li);
    taskList.appendChild(li);
  } else {
    li.classList.remove('completed');
    
    taskList.removeChild(li);
    taskList.insertBefore(li, taskList.firstChild);
  }
}

function removeTask(event) {
  const li = event.target.parentElement;
  taskList.removeChild(li);
}