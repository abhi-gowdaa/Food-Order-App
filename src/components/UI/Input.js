import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props , ref) => {

  console.log(props.input)
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      
      {/* {...props.input} used to add type ,id  etc from externally*/}
    </div>
  );
});

export default Input;