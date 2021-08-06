import {useState} from 'react'
// ,doneFn:Function,deleteFn:Function
type Listprop = {
    id: number;
    name: string;
    doneFn: Function;
    deleteFn: Function;
}
type Listdoneprop = {
    id: number;
    name: string;
   
}
const Task = ({ id, name, doneFn, deleteFn }: Listprop) => {
const [showResults, setShowResults] =useState(false)
const onMouseEnter=()=>setShowResults(true)
const onmouseleave=()=>setShowResults(false)
    return (<div  className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={onMouseEnter} onMouseLeave={onmouseleave}><span className="text-2xl">{name}</span><div 
    className="flex space-x-1 items-center">
    {showResults?<button className="bg-green-400 w-24 text-2xl"  onClick={() => doneFn(id,name)} >Done</button>:null}
    {showResults?<button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>:null}

  </div>
  </div>);
}

const doneTask = ({ id, name}: Listdoneprop) => {
    return (<div  className="flex justify-between h-8 items-center py-6 border-b"><span className="text-2xl">{name}</span></div>);
}
export default {Task,doneTask}
