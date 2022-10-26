import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddTask = ({getTask}) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    console.log(task);
    console.log(date);
    addNewTask(newTask)
    
    
  };


 
  

//Created
  const addNewTask=async(newTask)=>{
    const url = "https://6358cfefc26aac906f48b852.mockapi.io/api1/tasks"
    try{
await axios.post(url,newTask)

    } catch(e){

    }
    getTask();   
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter A Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Form.Group>
        <div className="text-center">
        <Button variant="success w-50" type="submit" >
          SAVE
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
