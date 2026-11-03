import { useState } from "react";
import { map } from "./App";

export interface TaskObj{
    title:string,
    finished:boolean,
};
export function Task({
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
    const items = map(tasks,Task);
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
}
