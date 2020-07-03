import * as React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props: {
  todoList: Array<{
    todo: string,
    isDone?: boolean,
    onClick?: () => any,
    id: number
  }>,
  filter?: string,
}) {
  const { todoList, filter } = props;
  return (
    <>
      {
        todoList.length !== 0
          ? (
            <ul className="list-unstyled">
              {todoList?.map((item) => {
                const {
                  todo, isDone, onClick, id,
                } = item;
                return <TodoItem key={id} todo={todo} isDone={isDone} onClick={onClick} filter={filter} />;
              })}
            </ul>
          )
          : <p>Nothing todo!</p>
      }
    </>
  );
}
TodoList.defaultProps = {
  filter: 'all',
};
