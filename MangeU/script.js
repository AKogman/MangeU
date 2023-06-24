var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
    }
    return Task;
}());
var task1 = new Task("HW");
console.log(task1);
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (description) {
        this.tasks.push(new Task(description));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var delTask = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks.splice(delTask, 1);
    };
    TaskManager.prototype.updateTaskDescription = function (id, newDescription) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].description = newDescription;
    };
    TaskManager.prototype.completeTask = function (id) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].completed = true;
    };
    return TaskManager;
}());
var manager = new TaskManager();
manager.addTask("Dishes");
manager.addTask("Home work");
console.log(manager.tasks);
function showTasksInLists() {
    document.getElementById("completed").innerHTML = "";
    document.getElementById("active").innerHTML = "";
    for (var _i = 0, _a = manager.tasks; _i < _a.length; _i++) {
        var task = _a[_i];
        if (task.completed == false) {
            document.getElementById("active").innerHTML +=
                "<div> <li class=\"list-group-item d-inline-block w-50\">".concat(task.description, "</li>\n                    <span> <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check\"></i>\n                    </button> <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i>\n                    </button> <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i>\n                    </button></span> </div> ");
        }
        else {
            document.getElementById("completed").innerHTML +=
                "<div> <li class=\"list-group-item d-inline-block w-50 text-decoration-line-through\">".concat(task.description, "</li>\n                        <span> <button class=\"btn btn-success\" disabled><i class=\"fa-solid fa-check-double\"></i>\n                        </button> <button class=\"btn btn-primary\" disabled><i class=\"fa-solid fa-pen\"></i>\n                        </button> <button class=\"btn btn-danger\" disabled><i class=\"fa-solid fa-trash\"></i>\n                        </button></span> </div> ");
        }
    }
}
showTasksInLists();
function completeTask(id) {
    manager.completeTask(id);
    showTasksInLists();
}
function updateDescription(id) {
    //prompt for new description
    var newDescription = prompt("Enter new description:");
    if (newDescription != null || newDescription != "") {
        manager.updateTaskDescription(id, newDescription);
        showTasksInLists();
    }
    else
        alert("Sorry! Something went wrong");
}
function deleteTask(id) {
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        showTasksInLists();
    }
}
function addNewTask() {
    var description = document.getElementById("description").value;
    manager.addTask(description);
    document.getElementById("description").value = "";
    showTasksInLists();
}
