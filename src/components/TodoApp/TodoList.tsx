import * as React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props: {
  todoList: Array<{
    todo: string,
    isDone?: boolean,
    id: number
  }>,
  filter?: string,
  handleTodoItemClick: (id: number) => void,
}) {
  const { todoList, filter, handleTodoItemClick } = props;
  return (
    <>
      {
        todoList.length !== 0
          ? (
            <ul className="list-unstyled">
              {todoList?.map((item) => {
                const {
                  todo, isDone, id,
                } = item;
                return (
                  <TodoItem
                    key={id}
                    id={id}
                    todo={todo}
                    isDone={isDone}
                    onClick={handleTodoItemClick}
                    filter={filter}
                  />
                );
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
