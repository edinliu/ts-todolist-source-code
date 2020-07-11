import * as React from 'react';

export interface TodoItemPropsType {
  todo: string,
  isDone?: boolean,
  onClick?: () => {},
  filter?: string,
  key: any,
}

export default function TodoItem(props: TodoItemPropsType) {
  const {
    todo, isDone, onClick, filter,
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
        <li
          style={style}
          onClick={onClick}
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
