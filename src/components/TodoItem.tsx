import * as React from 'react';
import styled from 'styled-components';

export interface TodoItemPropsType {
  todo: string,
  isDone?: boolean,
  onClick?: () => {},
}

function li(isDone: boolean): any {
  return styled.li`
  font-size: 1.5em;
  text-align: center;
  &:hover{
    color: grey;
  }
  transition-duration: 0.5s;
  cursor: pointer;
  ${isDone && 'text-decoration: line-through;'}
  color: ${isDone ? 'palevioletred' : 'white'};
`;
}

export default function TodoItem(props: TodoItemPropsType) {
  const {
    todo, isDone, onClick,
  } = props;
  const Li = li(isDone);
  return (
    <Li
      isDone={isDone}
      onClick={onClick}
      className="d-flex align-items-center"
    >
      <span>{todo}</span>
    </Li>
  );
}
TodoItem.defaultProps = {
  isDone: false,
  onClick: () => { },
};

