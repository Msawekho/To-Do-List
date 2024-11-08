// app.js
const taskList = document.getElementById('task-list');

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskText}
        <div>
            <button onclick="markCompleted(this)">✔</button>
            <button onclick="removeTask(this)">✖</button>
        </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function markCompleted(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
