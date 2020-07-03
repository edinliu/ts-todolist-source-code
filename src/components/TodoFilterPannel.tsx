import * as React from 'react';

export default function TodoFilterPannel(props: { onClick: (value: 'all' | 'todo' | 'done') => void }) {
  const { onClick } = props;
  return (
    <div>
      <button type="button" className="btn btn-secondary" onClick={() => { onClick('all'); }}>show all</button>
      <button type="button" className="btn btn-secondary" onClick={() => { onClick('todo'); }}>show todo</button>
      <button type="button" className="btn btn-secondary" onClick={() => { onClick('done'); }}>show done</button>
    </div>
  );
}
