const input = document.querySelector("input");
const addBtn = document.querySelector("button")
const list = document.querySelector(".list")

addBtn.addEventListener("click", () => {
    const taskText = input.value;

    if (taskText ==="") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.textContent = "✕";

    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);
    input.value = "";
})

const toggleBtn = document.getElementById("themeToggle");
//1. Load saved theme from local on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
//2. Toggle dark mode on button click
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    //3. save the current theme to localStorage
if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
});

toggleBtn.addEventListener("click", () => {
    documnet.body.classList.toggle("dark");
})

list.addEventListener("click", (event) => {
    const clickedElement =event.target;

    // Dlete button clicked
    if (clickedElement.className === "delete") {
        const li = clickedElement.parentElement;
        li.remove();
    }

    // Task text clicked
    if (clickedElement.className === "text") {
        clickedElement.classList.toggle("done");
    }
});