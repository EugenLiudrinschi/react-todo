import React, { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";
import TodoItems from "./components/TodoItems";
import "./styles/index.css";

function App() {
  const [items, setItems] = useState([]);
  const itemRef = useRef();

  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem("todo.items"));
    if (storageItems) {
      setItems(storageItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo.items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    const name = itemRef.current.value;

    if (name === "") {
      return;
    }

    setItems((prevItems) => {
      return [...prevItems, { id: v4(), name: name }];
    });

    itemRef.current.value = null;
  };

  const removeItem = (id) => {
    let filtredItems = items.filter((item) => item.id !== id);

    setItems(filtredItems);
  };

  return (
    <>
      <div className="todo-container">
        <TodoItems items={items} removeItem={removeItem} />
        <input
          ref={itemRef}
          type="text"
          className="todo-input"
          placeholder="Add a todo"
        />
        <button onClick={addItem} className="todo-button">
          Add todo
        </button>
      </div>
    </>
  );
}

export default App;
