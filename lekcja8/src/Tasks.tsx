import { useState } from "react";

export interface TaskObj {
    id: number,
    title: string,
    finished: boolean,
};
/*export function Task({
title,
finished,
}:TaskObj){
    const [isFinished, setIsFinished] = useState(finished);
    function ChangeFinishedStatus(){
        setIsFinished(!isFinished);
    }
    return(
        <span>
            <input type="checkbox" onChange={ChangeFinishedStatus} checked={isFinished}/>
            <p>{title+" - "+isFinished}</p>
        </span>
    );
}
export function Tasks({
taskList
}:TaskObj[]){
    const [tasks,setTasks] = useState(taskList);
    const items = tasks.map(Task);
    function AddTask(){
        const newTab = [];
        for(let i=0;i<tasks.length;i++){
            newTab.push(tasks[""+i]);
        }
        newTab.push({title:"Task3",finished:false});
        console.log(newTab);
        setTasks(newTab);
    }
    return(
        <section>
            <section>{items}</section>
            <button onClick={AddTask} >Dodaj</button>
        </section>
    );
}*/
const initTasks = [
    { id: 1, title: "e", finished: false },
    { id: 2, title: "e", finished: true }
]
function Task(task: TaskObj) {
    return (
        <div key={task.id}>
            <input type="checkbox" checked={task.finished} />
            <span>{task.title}</span>
        </div>
    );
}
function TaskApp() {
    const [tasks, setTasks] = useState(initTasks);
    function ToggleTask(id: number){
        const newTasks = tasks.map(t=>{
            if(t.id == id){
                t.finished = !t.finished;
            }
            return t;
        });
        setTasks(newTasks);
    }
    return (
        <>
            {tasks.map((task:TaskObj)=>(
            <Task {...task} onToggle={ToggleTask} />))}
        </>
    );
}
