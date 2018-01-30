export interface anyQueue {

    tasks: Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTasks(task:string):number;
}