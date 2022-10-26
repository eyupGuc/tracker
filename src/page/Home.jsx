import axios from "axios";
import  Button  from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";

const Home = () => {
  const [task, setTask] = useState([]);
  const[text,setText]=useState("Show Task Bar")

  const url = "https://6358cfefc26aac906f48b852.mockapi.io/api1/tasks";

 

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };

  useEffect(() => {
    getTask();
    console.log(task);
  }, []);

  return (
    <div>
     <Button variant="warning">{text}</Button>
       <AddTask/>
      <TaskList />
    </div>
  );
};

export default Home;
