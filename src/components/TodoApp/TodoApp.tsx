import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import InputAndSubmit from './InputAndSubmit';
import TodoList from './TodoList';
import TodoFilterPannel from './TodoFilterPannel';
import SignOut from '../../firebaseComponents/Auth/SignOut';
import collectionDocSet from '../../firebaseComponents/Data/functions/collectionDocSet';
import { AuthContext } from '../../firebaseComponents/Auth/AuthProvider';
import collectionDocGet from '../../firebaseComponents/Data/functions/collectionDocGet';

export default function TodoApp() {
  const { user } = useContext(AuthContext);
  const [todoListState, setTodoListState] = useState([]);
  const [whichTodoItemClick, setWhichTodoItemClick] = useState(null);
  const [filter, setFilter] = useState('all');
  const stringTodoState = JSON.stringify(todoListState);
  useEffect(() => {
    console.log('save data');
    if (todoListState.length !== 0 && user) collectionDocSet('user', user.uid, { todos: stringTodoState });
    if (todoListState.length === 0 && user) {
      collectionDocGet(
        'user',
        user.uid, (data) => {
          console.log(JSON.parse(data.todos));
          setTodoListState(JSON.parse(data.todos));
        },
        (err) => { console.log(err); },
      );
    }
  }, [todoListState, stringTodoState, user?.uid]);
  useEffect(() => {
    const changeTodoIsDone = (id: number) => {
      todoListState[id].isDone = !todoListState[id].isDone;
      setTodoListState(todoListState);
      setWhichTodoItemClick(null);
    };
    if (whichTodoItemClick !== null) {
      changeTodoIsDone(whichTodoItemClick);
    }
  }, [whichTodoItemClick, todoListState]);
  const handleSubmit = (value: string) => {
    const newTodoList = todoListState.concat([{
      todo: value,
      isDone: false,
      id: todoListState.length,
    }]);
    setTodoListState(newTodoList);
  };
  return (
    <div className="w-100">
      <InputAndSubmit onSubmit={handleSubmit} />
      <TodoList
        todoList={todoListState}
        filter={filter}
        handleTodoItemClick={setWhichTodoItemClick}
      />
      <TodoFilterPannel onClick={setFilter} />
      <SignOut />
    </div>
  );
}
