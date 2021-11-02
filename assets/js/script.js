var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// variable expression as a function
var createTaskHandler = function(event) {
    event.preventDefault();
    var listItemEl = document.createElement('li');
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new Task.";

    tasksToDoEl.appendChild(listItemEl);

}

// submit handler for form
formEl.addEventListener("submit", createTaskHandler);