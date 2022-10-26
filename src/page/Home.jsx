import axios from "axios";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
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
      <Button onClick={toggle} variant="warning">
        {text}
      </Button>
      {isOpen && <AddTask />}
      <TaskList task={task} />
    </div>
  );
};

export default Home;
