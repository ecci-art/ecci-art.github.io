const inputBox = document.getElementById("new-task");
const todoList = document.getElementById("todo-list");
const completedCount = document.getElementById("completed-count");
const pendingCount = document.getElementById("pending-count");

function updateCounts() {
    const tasks = todoList.querySelectorAll("li");
    let completed = 0;
    let pending = 0;

    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            completed++;} else {
            pending++;
        }
    });

    completedCount.textContent = completed;
    pendingCount.textContent = pending;
}

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    const checkbox = listItem.querySelector("input[type='checkbox']");
    const editBtn = listItem.querySelector(".edit-btn");
    const deleteBtn = listItem.querySelector(".delete-btn");
    const span = listItem.querySelector("span");

    checkbox.addEventListener("click", updateCounts);
    
    editBtn.addEventListener("click", function() {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null) {
            span.textContent = newText.trim();
            const checkbox = listItem.querySelector("input[type='checkbox']");
            checkbox.checked = false;
            updateCounts();
        }
    });
    
    deleteBtn.addEventListener("click", function() {
        todoList.removeChild(listItem);
        updateCounts();
    });

    todoList.appendChild(listItem);
    inputBox.value = "";  
    updateCounts();
}
