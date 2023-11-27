import React from 'react'
import { useState } from 'react';
import './Reminderinput.css';

const Reminderinput = (props) => {

  const [inputValue, setInputValue] = useState(props.value);

  const handleInputChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      props.onChange(newValue); // Call the callback function with the new value
  };

  return (
    <div className='reminderinput'>
        <p className='reminder-label'>
            {props.label}
        </p>
        <input className='reminder-input'
                id={props.id}
                element={props.element}
                type={props.type}
                value={inputValue}
                onChange={handleInputChange}
        />
    </div>

    
  )
}

export default Reminderinput