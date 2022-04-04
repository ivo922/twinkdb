import React, { useState, useEffect } from 'react';

import './InputField.scss';

function InputField(props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleChange(event);
  };

  return (
    <div className="InputField">
      <label htmlFor={props.id} style={!props.label ? { display: 'none' } : {}}>
        {props.label}
      </label>

      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={value}
        disabled={props.disabled}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default InputField;
