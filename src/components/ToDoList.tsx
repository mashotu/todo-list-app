import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Learn React",
    "Finish Odin Project Foundations",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewTask(event.target.value);
  }

  function addTask(): void {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number): void {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index: number): void {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number): void {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <Container className="to-do-list">
      <h1>To-Do List</h1>

      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} lg={6}>
          <Form className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}
            />
            <Button className="add-button" onClick={addTask}>
              <i className="bi bi-plus-lg"></i>
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <ol className="list-unstyled">
            {tasks.map((task, index) => (
              <li key={index} className="d-flex align-items-center">
                <span className="text">{task}</span>
                <Button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  <i className="bi bi-trash"></i>
                </Button>
                <Button
                  className="move-button"
                  onClick={() => moveTaskUp(index)}
                >
                  <i className="bi bi-caret-up-fill"></i>
                </Button>
                <Button
                  className="move-button"
                  onClick={() => moveTaskDown(index)}
                >
                  <i className="bi bi-caret-down-fill"></i>
                </Button>
              </li>
            ))}
          </ol>
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;
