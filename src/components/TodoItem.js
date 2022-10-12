import React from "react";

export default function TodoItem(props) {
  const { item } = props;

  return (
    <div className="todo-item">
      <p>{item.name}</p>
      <p onClick={() => props.removeItem(props.item.id)} className="todo-close">
        X
      </p>
    </div>
  );
}
