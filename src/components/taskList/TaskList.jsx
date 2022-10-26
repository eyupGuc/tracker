import axios from "axios";
import { AiFillDelete } from "react-icons/ai";

const TaskList = ({ task,getTask }) => {
  const url = "https://6358cfefc26aac906f48b852.mockapi.io/api1/tasks";

  // console.log(task);
  const deleteTask = async (id) => {
    await axios.delete(`${url}/${id}`);
  };

  getTask();

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;

        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between bg-secondary p-2 rounded-2"
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <AiFillDelete
                onClick={(id) => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  fontSize: "1.8rem",
                  marginRight: "10px",
                  boxShadow: "2px 2px 2px black",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
