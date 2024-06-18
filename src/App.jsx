/* eslint-disable react/prop-types */
import './App.css'
import TaskLane from "./components/TaskLane";
import { useState } from "react";

function App() {
  let [latestID, setID] = useState(10);
  let [nome, setNome] = useState("");
  let [tasks_todo, setTodos] = useState([
    {id:1, nome: "Andare in posta"},
    {id:2, nome: "Chiamare il medico"}
  ]);
  let [tasks_doing, setDoings] = useState([
    {id:3, nome: "Aggiungere il nuovo progetto a GitHub"}
  ]);
  let [tasks_done, setDones] = useState([]);

  let todoConf = {
    right: true
  };
  let doingConf = {
    left: true,
    right: true
  };
  let doneConf = {
    left: true,
    remove: true
  };
  
  function moveTodoToDoing(task){
    let newTodos = tasks_todo.filter((todo) => todo.id !== task.id);
    setTodos(newTodos);

    let newDoings = [...tasks_doing];
    newDoings.push(task);
    setDoings(newDoings);
  }
  function moveDoingTodone(task){
    let newDoings = tasks_doing.filter((todo) => todo.id !== task.id);
    setDoings(newDoings);

    let newDone = [...tasks_done];
    newDone.push(task);
    setDones(newDone);
  }
  function moveDoneToDoing(task){
    let newDones = tasks_done.filter((todo) => todo.id !== task.id);
    setDones(newDones);

    let newDoing = [...tasks_doing];
    newDoing.push(task);
    setDoings(newDoing);
  }
  function moveDoingToDo(task){
    let newDoings = tasks_doing.filter((todo) => todo.id !== task.id);
    setDoings(newDoings);
    console.log(newDoings);

    let newToDos = [...tasks_todo];
    newToDos.push(task);
    setTodos(newToDos);
  }
  function removeTask(task){
    let newDones = tasks_done.filter((todo) => todo.id !== task.id);
    setDones(newDones);
  }

  function insertTask(e){
    e.preventDefault();

  if (!nome) return;

    latestID = latestID+1;
    setID(latestID);
    const newTask = {id:latestID, nome: nome};
    console.log("New task: "+newTask.nome);
    let newToDos = [...tasks_todo];
    newToDos.push(newTask);
    setTodos(newToDos);
    setNome("");
  }

  return (
    <>
    <div className='input-text' onSubmit={insertTask}>
      <p>Type a new To DO task here: </p>
      <form action="">
        <input type="text" placeholder='task to do' value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <button>add</button>
      </form>
      
    </div>
    <div className='cards-container'>
      <TaskLane name="TO DO" tasks={tasks_todo} conf ={todoConf} moveTo={moveTodoToDoing} moveToL={moveTodoToDoing} />
      <TaskLane name="DOING" tasks={tasks_doing} conf ={doingConf} moveTo={moveDoingTodone} moveToL={moveDoingToDo}/>
      <TaskLane name="DONE" tasks={tasks_done} conf ={doneConf}  moveToL={moveDoneToDoing} remove={removeTask}/>
    </div>
    </>
  )
}

export default App