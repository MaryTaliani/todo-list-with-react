/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function TaskLane({ tasks, name, conf, moveTo, moveToL, remove }) {
    return( 
        <div className="cards">
            <h2>{name}</h2>
            {tasks.map((task) => (          
                <div className="flex-div" key={task.id}>
                    {conf.left && (<button onClick={()=>moveToL(task)}>&lt;</button>)}
                    {task.nome}
                    {conf.right && (<button onClick={()=>moveTo(task)}>&gt;</button>)} {conf.remove && <button onClick={()=>remove(task)}>x</button>}</div>
            ))}
             
        </div>    
    );
}

export default TaskLane;