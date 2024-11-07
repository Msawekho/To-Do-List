import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES module usage
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } catch (error) {
        console.error("Error loading index.html:", error);
        res.status(500).send("An error occurred while loading the page.");
    }
});

app.use(express.urlencoded({ extended: true }));

let tasks = [];

// POST route to add tasks
app.post('/add', async (req, res) => {
    try {
        const { task } = req.body;
        tasks.push(task);
        res.redirect('/');
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).send("An error occurred while adding the task.");
    }
});

// Start the server
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