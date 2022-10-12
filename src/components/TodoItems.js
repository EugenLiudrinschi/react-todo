import React from "react";
import TodoItem from "./TodoItem";

export default function TodoItems(props) {
  const { items } = props;
  return items.map((item) => {
    return <TodoItem key={item.id} item={item} removeItem={props.removeItem} />;
  });
}
