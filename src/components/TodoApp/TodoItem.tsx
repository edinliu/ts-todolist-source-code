/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react';

export interface TodoItemPropsType {
  todo: string,
  isDone?: boolean,
  onClick?: (id: number) => void,
  filter?: string,
  key: any,
  id: number,
}

export default function TodoItem(props: TodoItemPropsType) {
  const {
    todo, isDone, onClick, filter, id,
  } = props;
  const style = {
    fontSize: '1.5em',
    TextAlignProperty: 'center',
    transitionDuration: '0.5s',
    cursor: 'pointer',
    textDecoration: isDone ? 'line-through' : 'none',
    color: isDone ? 'palevioletred' : 'white',
  };
  const isShow = (filter === 'all') || ((filter === 'done') && (isDone === true)) || ((filter === 'todo') && (isDone === false));
  return (
    <>
      {isShow && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li
          style={style}
          onClick={() => { onClick(id); }}
          className="d-flex align-items-center"
        >
          <span>{todo}</span>
        </li>
      )}
    </>
  );
}
TodoItem.defaultProps = {
  isDone: false,
  onClick: () => { },
  filter: 'all',
};
