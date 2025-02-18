import { useReducer, useState } from "react";

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
const initialCounter = 0;

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 0 ? state - 1 : state;

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [input, setInput] = useState("");
  const [todos, todoDispatch] = useReducer(todoReducer, initialState);
  const [counter, counterDispatch] = useReducer(counterReducer, initialCounter);

  const AddTODO = () => {
    todoDispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const deletTODO = (id) => {
    todoDispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={AddTODO}>add todo</button>
      </div>
      <div>
        <ul>
          {todos &&
            todos.map((item, index) => (
              <li key={item.id}>
                {index + 1}:{item.text}
                <button onClick={() => deletTODO(item.id)}>Delete</button>
                <button>Complete</button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => counterDispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => counterDispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
