import axios from "axios";
import Button from "react-bootstrap/Button";
import React , { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";

const Home = () => {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("Show Task Bar");
  const [isOpen, setIsOpen] = useState(false);
  const url = "https://6358cfefc26aac906f48b852.mockapi.io/api1/tasks";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);

    // console.log("Button clicked")
  };
//Crud / Read
  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  //   console.log(task);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column ">
      <Button onClick={()=>{toggle()}} variant="warning">
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}
      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
