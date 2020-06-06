const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];

    case "TOGGLE_COMPLETE":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    case "DELETE_TODO":
      state = state.filter(todo => todo.id !== action.id);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
