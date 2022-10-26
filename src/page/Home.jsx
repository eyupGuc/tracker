import axios from "axios";
import  Button  from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const Home = () => {
  const [task, setTask] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Add Task Bar");
  const url = "https://6358cfefc26aac906f48b852.mockapi.io/api1/tasks";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Add Task Bar" : "Close Add Task Bar";
    setText(buttonText);
  };

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
      <Button 
        onClick={() => {
          toggle();
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default Home;
