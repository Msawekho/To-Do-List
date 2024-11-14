# Advanced To-Do List Application
![01](https://github.com/user-attachments/assets/3624ef2d-add2-491b-bb7d-0b6addfe1fe2)



An advanced To-Do List application that allows users to add, complete, delete, and search tasks. Built using HTML, CSS, JavaScript, Node.js, and Express, this project serves as a full-stack JavaScript application with client-server functionality and local storage.

## Features
- **Add Tasks:** Easily add new tasks to your list.
- **Mark as Completed:** Mark tasks as completed or incomplete with a single click.
- **Remove Tasks:** Delete tasks you no longer need.
- **Search Tasks:** Filter tasks with a real-time search input.
- **Persistent Storage:** Tasks are saved in `localStorage` on the client-side.
- **Responsive Design:** User-friendly design across different screen sizes.

## Search function
![02](https://github.com/user-attachments/assets/306027eb-7ade-4dbb-8c51-23e8e788077b)

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Storage:** Local Storage

## Project Structure
```
project-directory/
├── public/
│   ├── index.html         # Main HTML file
│   ├── style.css          # CSS for styling
│   ├── app.js             # Client-side JavaScript for task management
│
├── server.js              # Node.js and Express server file
├── package.json           # Project configuration and dependencies
└── README.md              # Project documentation
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd project-directory
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open the app:**  
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Add a Task:** Type in the task description and click "Add Task."
- **Complete a Task:** Click the check (✔) button to mark a task as complete or incomplete.
- **Remove a Task:** Click the cross (✖) button to delete a task.
- **Search for Tasks:** Enter keywords in the search bar to filter tasks by name.

## Server Routes
- **GET /** - Loads the main page (`index.html`).
- **POST /add** - Adds a new task to the server storage.
- **POST /remove** - Removes a specified task from the server storage.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

