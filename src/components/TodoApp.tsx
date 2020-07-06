import * as React from 'react';
import { useState, useEffect } from 'react';
import InputAndSubmit from './InputAndSubmit';
import TodoList from './TodoList';
import TodoFilterPannel from './TodoFilterPannel';

export default function TodoApp() {
  const [todoListState, setTodoListState] = useState([]);
  const [whichTodoItemClick, setWhichTodoItemClick] = useState(null);
  const [filter, setFilter] = useState('all');
  const changeTodoIsDone = (id: number) => {
    todoListState[id].isDone = !todoListState[id].isDone;
    setTodoListState(todoListState);
    setWhichTodoItemClick(null);
  };
  useEffect(() => {
    if (whichTodoItemClick !== null) {
      changeTodoIsDone(whichTodoItemClick);
    }
  }, [whichTodoItemClick]);
  const handleSubmit = (value: string) => {
    const newTodoList = todoListState.concat([{
      todo: value,
      isDone: false,
      id: todoListState.length,
      onClick: () => {
        setWhichTodoItemClick(todoListState.length);
      },
    }]);
    setTodoListState(newTodoList);
  };
  return (
    <div className="p-5">
      <InputAndSubmit onSubmit={handleSubmit} />
      <TodoList todoList={todoListState} filter={filter} />
      <TodoFilterPannel onClick={setFilter} />
    </div>
  );
}
