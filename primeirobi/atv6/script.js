const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function createTaskItem(taskText) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskContent = document.createElement('div');
  taskContent.className = 'task-content';

  const taskCheckLabel = document.createElement('label');
  taskCheckLabel.className = 'task-check';

  const taskCheck = document.createElement('input');
  taskCheck.type = 'checkbox';
  taskCheck.className = 'task-check-input';

  const taskCheckText = document.createElement('span');
  taskCheckText.textContent = 'Concluída';

  const taskTextElement = document.createElement('span');
  taskTextElement.className = 'task-text';
  taskTextElement.textContent = taskText;

  taskCheck.addEventListener('change', () => {
    taskItem.classList.toggle('done', taskCheck.checked);
  });

  taskCheckLabel.append(taskCheck, taskCheckText);
  taskContent.append(taskCheckLabel, taskTextElement);
  taskItem.append(taskContent);

  return taskItem;
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (!taskText) {
    taskInput.focus();
    return;
  }

  const taskItem = createTaskItem(taskText);
  taskList.appendChild(taskItem);
  taskInput.value = '';
  taskInput.focus();
});

taskList.addEventListener('click', (event) => {
  if (event.target.closest('.task-check')) {
    return;
  }

  const taskItem = event.target.closest('.task-item');

  if (taskItem && taskList.contains(taskItem)) {
    taskItem.remove();
  }
});