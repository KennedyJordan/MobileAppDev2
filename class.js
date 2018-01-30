"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.tasks = [];
    }
    myClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Element " + task + " added to array");
        var count = this.tasks.length;
        return count;
    };
    myClass.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    myClass.prototype.deleteTasks = function (task) {
        var key = task;
        var index = this.tasks.indexOf(key, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        return this.tasks.length;
    };
    return myClass;
}());
var newClass = new myClass();
newClass.addTask("Hello");
newClass.listAllTasks();
newClass.deleteTasks("Hello");
