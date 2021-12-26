import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

const initState = {
  todos: [
    {
      title: "Buy Milk",
      status: false,
      id: "1"
    }
  ]
};
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action?.payload]
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id)
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, status: !item.status };
          } else {
            return item;
          }
        })
      };
    }
    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, title: action.payload.title };
          } else {
            return item;
          }
        })
      };
    }
    default: {
      return state;
    }
  }
};
