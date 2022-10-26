const TaskList=({task})=>{
// console.log(task);
    return(
       
        <div>
 {task.map((item)=>{
    const {Date,Task,id,task}=item;
    console.log(task)
 })}

        </div>
    )
}

export default TaskList;