import * as React from 'react';
import { useState, useEffect } from 'react';
import InputAndSubmit from './InputAndSubmit';
import TodoList from './TodoList';
import TodoFilterPannel from './TodoFilterPannel';

export default function TodoApp() {
  const [todoListState, setTodoListState] = useState([]);
  const [whichTodoItemClick, setWhichTodoItemClick] = useState(null);
  const [filter, setFilter] = useState('all');
  // 步驟3. 使用 changeTodoIsDone 去 setTodoListState 並且把 setWhichTodoItemClick 設回預設值 null
  const changeTodoIsDone = (id: number) => {
    const copy = Object.assign([], todoListState);
    copy[id].isDone = !copy[id].isDone;
    setTodoListState(copy);
    setWhichTodoItemClick(null);
  };
  // 步驟2. 使用 useEffect 去偵測 setWhichTodoItemClick 並執行 changeTodoIsDone
  useEffect(() => {
    if (whichTodoItemClick !== null) {
      changeTodoIsDone(whichTodoItemClick);
    }
  }, [whichTodoItemClick]);
  /**
    步驟1: 創建 onSubmitTodo 讓 <InputAndSubmit/> 使用 setTodoListState 更新 todoListState，並且製作一個閉包函式
    去紀錄當時的 todoListState.length 並作為 <TodoItem/> 的 onClick，當onClick執行時會用 todoListState.length
    去 setWhichTodoItemClick 改變本組件的 state
  */
  const onSubmitTodo = (value: string) => {
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
      <InputAndSubmit onSubmit={onSubmitTodo} />
      <TodoList todoList={todoListState} filter={filter} />
      <TodoFilterPannel onClick={setFilter} />
    </div>
  );
}
