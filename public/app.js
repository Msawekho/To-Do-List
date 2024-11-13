const taskList = document.getElementById('task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Load tasks from localStorage or initialize an empty array

// Function to render tasks from the array to the DOM
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'completed' : '';
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="markCompleted(this)">✔</button>
                <button onclick="removeTask(this)">✖</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;
    if (taskText.length > 50) {
        alert('Task cannot exceed 50 characters.');
        return;
    }
    if (tasks.some(task => task.text === taskText)) {
        alert('This task already exists.');
        return;
    }

    // Add new task to the array and save to localStorage
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Render the updated tasks list
    renderTasks();
    taskInput.value = '';
}

// Function to mark a task as completed or not
function markCompleted(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').textContent;

    tasks = tasks.map(task =>
        task.text === taskText ? { ...task, completed: !task.completed } : task
    );

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to remove a task
function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').textContent;

    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to filter tasks based on search input
function searchTask() {
    const searchInput = document.getElementById('search-task').value.toLowerCase();
    const tasksInDOM = taskList.getElementsByTagName('li');
    let hasMatch = false;

    Array.from(tasksInDOM).forEach(task => {
        const taskText = task.querySelector('span').textContent.toLowerCase();
        const matchesSearch = taskText.includes(searchInput);
        task.style.display = matchesSearch ? '' : 'none';

        if (matchesSearch) {
            hasMatch = true;
        }
    });

    if (!hasMatch) {
        alert('Task does not exist.');
        renderTasks(); // Reset the task list to show all tasks
    }
}

// Initial render of tasks when the page loads
renderTasks();
