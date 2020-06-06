import { createStore } from "redux";
import todoReducer from "./reducer";

const store = createStore(todoReducer);
store.subscribe(() => console.log(store.getState()));

export default store;
