import {anyQueue} from "./interface_lab2";

class myClass implements anyQueue
{
    tasks: Array<string>=[];

    addTask(task:string): number {
        this.tasks.push(task);

    console.log("Element "+task+" added to array")

    let count:number = this.tasks.length;
    return count;
}

listAllTasks()
{
    this.tasks.forEach(function(task){
        console.log(task)
    });
}

deleteTasks(task:string):number
{
    let key : string = task;
    let index : number = this.tasks.indexOf(key,0);

    if(index > -1)
    {
        this.tasks.splice(index,1);
    }

    return this.tasks.length;
}

}

let newClass = new myClass();

newClass.addTask("Hello");
newClass.listAllTasks();
newClass.deleteTasks("Hello");