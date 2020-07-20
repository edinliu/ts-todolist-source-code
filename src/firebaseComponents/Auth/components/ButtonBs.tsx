import * as React from 'react';

export default function ButtonBs(props: { children: any, onClick: () => void }) {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="btn btn-primary w-100 mt-1"
      type="button"
    >
      {children}
    </button>
  );
}
