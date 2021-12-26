import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = ({ title, status, id }) => ({
  type: ADD_TODO,
  payload: {
    title,
    status,
    id
  }
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

export const editTodo = ({ title, id }) => {
  return {
    type: EDIT_TODO,
    payload: {
      title,
      id
    }
  };
};
