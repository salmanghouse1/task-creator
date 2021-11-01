var btnEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

function createTaskHandler() {
    var listItemEl = document.createElement('li');
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new Task.";

    tasksToDoEl.appendChild(listItemEl);

}

btnEl.addEventListener("click", createTaskHandler);