import React from "react";
import "./styles.css";
import Form from "./components/form";
import Card from "./components/todo_card";

export default function App() {
  return (
    <div className="App">
      <Form />
      <Card />
    </div>
  );
}
