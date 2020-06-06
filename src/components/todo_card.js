import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles.css";
import { markAsComplete, deleteTodo } from "../redux/actions";

const Card = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();
  const handleStyle = value => {
    if (value === "1") {
      return {
        backgroundColor: "#f26d5b",
        color: "black",
        borderRadius: "10px",
        fontWeight: "Bold"
      };
    }
    if (value === "0") {
      return {
        backgroundColor: "#fdfdfd",
        color: "#492540",
        borderRadius: "10px",
        fontWeight: "Bold"
      };
    }
    if (value === "2") {
      return {
        backgroundColor: "#facf5a",
        color: "black",
        borderRadius: "10px",
        fontWeight: "Bold"
      };
    }
    if (value === "3") {
      return {
        backgroundColor: "#dee1ec",
        color: "#492540",
        borderRadius: "10px",
        fontWeight: "Bold"
      };
    }
  };

  const isCompletedStyle = value => {
    if (value) {
      return {
        textDecorationLine: "overline"
      };
    }
  };

  const toggleDone = id => {
    dispatch(markAsComplete(id));
  };

  const renderCard = () => {
    return todos.map((todo, i) => {
      return (
        <div
          className="col s12 m3 card-div"
          key={i}
          style={handleStyle(todo.priority)}
        >
          <p className="todo-name" style={isCompletedStyle(todo.isCompleted)}>
            {todo.todo}
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                onClick={() => toggleDone(todo.id)}
                className="filled-in"
              />
              <span className="black-text">Done</span>
            </label>
          </p>
          <button
            className="btn blue delete-btn"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <i class="material-icons ">delete</i>
          </button>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row whole-div">{renderCard()}</div>
    </div>
  );
};

export default Card;
