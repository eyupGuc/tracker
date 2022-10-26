const TaskList = ({ task }) => {
  // console.log(task);
  return (
    <div>
      {task.map((item) => {
        const { id, task,date } = item;

        return (
          <div key={id}>
            <h4>{task}</h4>
            <p>{date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
