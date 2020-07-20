import * as React from 'react';

export default function TodoFilterPannel(props: { onClick: (value: 'all' | 'todo' | 'done') => void }) {
  const { onClick } = props;
  return (
    <div className="w-100 d-flex">
      <button type="button" className="btn btn-secondary flex-grow-1 m-1" onClick={() => { onClick('all'); }}>show all</button>
      <button type="button" className="btn btn-secondary flex-grow-1 m-1" onClick={() => { onClick('todo'); }}>show todo</button>
      <button type="button" className="btn btn-secondary flex-grow-1 m-1" onClick={() => { onClick('done'); }}>show done</button>
    </div>
  );
}
