import * as React from 'react';
import { useState } from 'react';
import InputAndSubmit from './InputAndSubmit';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todoListState, setTodoListState] = useState([]);
  // const todoListStateCopy = JSON.parse(JSON.stringify(todoListState));
  // const changeTodoItemIsDone = (id: number) => {
  //   console.log(todoListState);
  // };
  const onSubmitTodo = (value: string) => {
    setTodoListState([...todoListState, {
      todo: value,
      isDone: false,
      id: todoListState.length,
      // onClick: () => {
      //   // changeTodoItemIsDone(todoListState.length);
      // },
    }]);
  };
  return (
    <div className="p-5">
      <InputAndSubmit onSubmit={onSubmitTodo} />
      <TodoList todoList={todoListState} />
    </div>
  );
}
