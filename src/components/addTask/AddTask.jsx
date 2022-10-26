import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddTask = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter A Task" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Please select a date" />
        </Form.Group>
        <Button variant="success">SAVE </Button>
      </Form>
    </div>
  );
};

export default AddTask;
