import { createStore } from "redux";
import { TodoList } from "../reducer/reducer";

export const store = createStore(TodoList)