import {useState} from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
  id: number;
  name: string;
}

const TodoList = () => {

  const [curTask, setCurTask] = useState<string>('')
  const [textbuffer,settext]=useState<string>('')
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [donetasks, setdoneTasks] = useState<TaskData[]>([])
  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
    if(ev.key==="Enter")
    {
    addTask(curTask)
    }
  }
  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
    settext(ev.target.value)
  }

  const addTask = (taskName: string) => {
    //use date.getTime() to get unique numeric id (https://www.w3schools.com/jsref/jsref_gettime.asp)
    const newId = (new Date()).getTime()

    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    // spread syntax [...array] (https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)
    if(taskName!=="")
    {
    const newTasks = [{id: newId, name: taskName},...tasks]
    setTasks(newTasks)
    settext("")
    setCurTask("")
    }
    else
    {
      alert("Cannot left it empty")
    }
  }

  const deleteTask = (id: number) => {
    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }
  const doneTask = (id: number,name:string) => {
    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    const newdoneTasks = [{id: id,name:name},...donetasks]
    setdoneTasks(newdoneTasks)
    const newnotTasks = tasks.filter(x => x.id !== id)
    setTasks(newnotTasks)
  }
  return (
    <div >
      <div className="flex space-x-1">
      <input className='border border-gray-400 w-full text-2xl' onChange={onChangeCallback} onKeyDown={onKeyDownCallback} value={textbuffer}></input>
      <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
      </div>
      <div>
      <ul>
      {tasks.map( x => {return <li id="notdone"><Task.Task id={x.id} name={x.name} doneFn={doneTask} deleteFn={deleteTask}/></li>})}
      
      {donetasks.map( x => {return <li id="done"><Task.doneTask id={x.id} name={x.name}/></li>})}
      </ul>
      </div>
    </div>
  )
}

export default TodoList