var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// taskDataObj


// variable expression as a function
var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    //Package up data as an Object
    var taskDataObj = {
            name: taskNameInput,
            type: taskTypeInput
        }
        // listItemEl.appendChild(taskInfoEl);

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
        // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";

        // create div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

        listItemEl.appendChild(taskInfoEl);

        // add entire list item to list
        tasksToDoEl.appendChild(listItemEl);
    }
    // submit handler for form
formEl.addEventListener("submit", taskFormHandler);