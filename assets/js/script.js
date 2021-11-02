var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// variable expression as a function
var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskNameInputSelect = document.querySelector("select[name='task-type']").value;

    // Create a list item
    var listItemEl = document.createElement('li');
    // Create a div to hold the content
    var taskInfoEl = document.createElement('div');
    // give it a class name
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML("<h3 class='task-name'>" + taskTypeInput + "</h3><span class='task-type'>" + taskNameInput + "</span>");
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);

}

// submit handler for form
formEl.addEventListener("submit", createTaskHandler);