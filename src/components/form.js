import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import "../styles.css";

const Form = () => {
  const dispatch = useDispatch();

  const idGenerator = () => Math.floor(Math.random() * 10000 + 5041);

  const [values, setValues] = useState({
    id: null,
    todo: "",
    priority: "0",
    isCompleted: false
  });

  const onhandleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { todo } = values;

  const onSubmit = event => {
    event.preventDefault();
    if (values.todo !== "") {
      values.id = idGenerator();
      dispatch(addTodo(values));
      setValues({ ...values, todo: "", id: null });
    }
  };
  return (
    <div className="row form-div">
      <div className="  col s12 m6 offset-m3 center-align">
        <div>
          <div>
            <div className="input-field">
              <textarea
                value={todo}
                id="icon_prefix2"
                onChange={onhandleChange("todo")}
                className="materialize-textarea todo_input"
              />
              <select
                className="browser-default"
                onChange={onhandleChange("priority")}
              >
                <option value="0">Choose your priority</option>
                <option value="1">Urgent</option>
                <option value="2">Important</option>
                <option value="3">Have time</option>
              </select>
              <label>Write your Todo here</label>
              <button
                className="btn submit-btn waves-light white black-text"
                onClick={onSubmit}
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
