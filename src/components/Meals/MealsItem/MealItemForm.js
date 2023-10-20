//add items to cart
import Input from "../../UI/Input";
import classes from "./MealsItemForm.module.css";
import React, { useRef, useState } from "react";

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // to con string to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);

      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button className={classes.button}>+ Add</button>
      {!amountIsValid && <p> please enter a valid amount (1-5) </p>}
    </form>
  );
};

export default MealsItemForm;
