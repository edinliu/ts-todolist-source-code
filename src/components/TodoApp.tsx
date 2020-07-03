import * as React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import InputAndSubmit from './InputAndSubmit';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todoListState, setTodoListState] = useState([]);
  const newTodoListState2 = todoListState;
  const [idClick, setIdClick] = useState(null);
  const changeTodoItemIsDone = (id: number) => {
    // const newTodoListState = JSON.parse(JSON.stringify(todoListState));
    const newTodoListState = _.cloneDeep(newTodoListState2);
    if (newTodoListState[id]) newTodoListState[id].isDone = !newTodoListState[id].isDone;
    // for (let i = 0; i < newTodoListState.length; i += 1) {
    //   newTodoListState[id].onClick = todoListState[id].onClick;
    // }
    console.log("clicked");
    // if (newTodoListState[id]) newTodoListState[id].isDone = !newTodoListState[id]?.isDone;
    setTodoListState(newTodoListState);
  };

  const onTodoItemClick = () => {//id: number
    // console.log("onTodoItemClick");
    // setIdClick(id);
    // changeTodoItemIsDone(id);
    // console.log(id);

    console.log(newTodoListState2);
    // const newTodoListState = _.cloneDeep(todoListState);
    // console.log(newTodoListState);
    // if (newTodoListState[id]) newTodoListState[id].isDone = !newTodoListState[id].isDone;
    // setTodoListState(newTodoListState);
  };
  const onSubmitTodo = (value: string) => {
    setTodoListState([...todoListState, {
      todo: value,
      isDone: false,
      id: todoListState.length,
      onClick: () => {
        // const idd = todoListState.length;
        onTodoItemClick();
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
