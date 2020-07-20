import * as React from 'react';
import { useState, useEffect } from 'react';

interface InputAndSubmit {
  onSubmit?: (value: string) => void,
  onInputValueChange?: (value: string) => void,
  buttonName?: string,
  defaultInputValue?: string,
}
export default function InputAndSubmit(props: InputAndSubmit) {
  const {
    onSubmit, onInputValueChange, buttonName, defaultInputValue,
  } = props;
  const [inputValue, setInputValue] = useState(defaultInputValue);
  useEffect(() => { setInputValue(defaultInputValue); }, [defaultInputValue]);
  const inputSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <div className="d-flex">
      <input
        onKeyUp={(e) => { if (e.keyCode === 13) inputSubmit(); }}
        type="text"
        className="rounded mr-2 flex-grow-1"
        onChange={(e) => {
          if (onInputValueChange) onInputValueChange(e.target.value);
          setInputValue(e.target.value);
        }}
        onFocus={() => { if (inputValue === defaultInputValue) setInputValue(''); }}
        value={inputValue}
      />
      <button
        type="submit"
        onClick={inputSubmit}
        className="btn btn-primary"
      >
        {buttonName}
      </button>
    </div>
  );
}
InputAndSubmit.defaultProps = {
  onSubmit: (value: number) => { alert(value); },
  onInputValueChange: () => { },
  buttonName: 'SUBMIT',
  defaultInputValue: 'please enter',
};
