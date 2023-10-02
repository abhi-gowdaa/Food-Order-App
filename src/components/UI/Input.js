import classes from './Input.module.css';

const Input = (props) => {
  console.log(props.input)
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      
      {/* {...props.input} used to add type ,id  etc from externally*/}
    </div>
  );
};

export default Input;