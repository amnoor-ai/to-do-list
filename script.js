const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.querySelector(".list");
const toggleBtn = document.getElementById("themeToggle");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.className = "text";
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("done");
        }

        const delBtn = document.createElement("button");
        delBtn.className = "delete";
        delBtn.textContent = "✕";

        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        span.addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();
    input.value = "";
});

// Dark Mode

//load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

//toggle theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Initial render
renderTasks();
