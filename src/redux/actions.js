export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    todo: todo
  };
};

export const markAsComplete = id => {
  return {
    type: "TOGGLE_COMPLETE",
    id: id
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id: id
  };
};
