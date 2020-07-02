import * as React from 'react';

export interface TodoItemPropsType {
  todo: string,
  isDone?: boolean,
  onClick?: () => {},
}

export default function TodoItem(props: TodoItemPropsType) {
  const {
    todo, isDone, onClick,
  } = props;
  const style = {
    fontSize: '1.5em',
    TextAlignProperty: 'center',
    transitionDuration: '0.5s',
    cursor: 'pointer',
    textDecoration: isDone ? 'line-through' : 'none',
    color: isDone ? 'palevioletred' : 'white',
  };
  return (
    <li
      style={style}
      onClick={onClick}
      className="d-flex align-items-center"
    >
      <span>{todo}</span>
    </li>
  );
}
TodoItem.defaultProps = {
  isDone: false,
  onClick: () => { },
};
