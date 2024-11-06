// server.js
import express from 'express';

const app = express();

const port = 3000;

app.set("view engine", "js");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks=[];


app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add', (req, res) => {
    const { task } = req.body;  
    tasks.push(task);  // Add new task to the tasks array
    res.redirect('/');  // Redirect back to home
});


app.listen(port, () => {
    console.log(`To-Do List app running at http://localhost:${port}`);
});


/*
import express from 'express';

const app = express();
const port = 3000;





let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });  // Render the tasks on the index page
});



app.post('/remove', (req, res) => {
    const taskToRemove = req.body.task;  // Get the task to remove from the form input
    tasks = tasks.filter(task => task !== taskToRemove);  // Filter out the task
    res.redirect('/');  // Redirect back to the home page
});

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
*/