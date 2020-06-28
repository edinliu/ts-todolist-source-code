import * as React from 'react';

export default function TodoList(props: { todoList: string[] }) {
  const { todoList } = props;
  let key = 0;
  console.log(todoList);
  return (
    <>
      {
        todoList.length !== 0 ?
          <ul>
            {todoList?.map((todo) => {
              key = key + 1
              return <li key={key}>{todo}</li>
            })}
          </ul> :
          <p>Nothing todo!</p>
      }
    </>
  )
}