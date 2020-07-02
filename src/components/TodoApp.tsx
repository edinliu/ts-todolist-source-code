import * as React from 'react';
import { useState, useEffect } from 'react';
import InputAndSubmit from './InputAndSubmit';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todoListState, setTodoListState] = useState([]);
  const [idClick, setIdClick] = useState(null);
  const changeTodoItemIsDone = (id: number) => {
    const newTodoListState = JSON.parse(JSON.stringify(todoListState));
    console.log(newTodoListState);
    if (newTodoListState[id]) newTodoListState[id].isDone = !newTodoListState[id].isDone;
    console.log(newTodoListState);
    setTodoListState(newTodoListState);
  };
  useEffect(() => {
    changeTodoItemIsDone(idClick);
  }, [idClick]);
  const onSubmitTodo = (value: string) => {
    setTodoListState([...todoListState, {
      todo: value,
      isDone: false,
      id: todoListState.length,
      onClick: () => {
        console.log("clicked");
        setIdClick(todoListState.length);
      },
    }]);
  };
  return (
    <div className="p-5">
      <InputAndSubmit onSubmit={onSubmitTodo} />
      <TodoList todoList={todoListState} />
    </div>
  );
}
