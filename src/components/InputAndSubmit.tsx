import * as React from 'react';
import { useState, useEffect } from 'react';

export default function InputAndSubmit(props: {
  onSubmit?: (value: string) => void,
  onInputValueChange?: (value: string) => void,
  buttonName?: string,
  defaultInputValue?: string,
}) {
  const { onSubmit, onInputValueChange, buttonName = "SUBMIT", defaultInputValue = "please enter" } = props;
  const [inputValue, setInputValue] = useState(defaultInputValue)
  useEffect(() => { setInputValue(defaultInputValue) }, [defaultInputValue])
  return (
    <div className="d-flex">
      <input type="text" className="rounded mr-2"
        onChange={(e) => {
          onInputValueChange && onInputValueChange(e.target.value);
          setInputValue(e.target.value);
        }}
        onFocus={() => { inputValue === defaultInputValue && setInputValue("") }}
        value={inputValue} />
      <button onClick={() => {
        onSubmit(inputValue);
        setInputValue("");
      }} className="btn btn-primary">{buttonName}</button>
    </div>
  )
}