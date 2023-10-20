import MealsItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";

import CartContext from "./../../../store/Cart-context";
import { useContext } from "react";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  // amount we get from mealsItemForm
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div key={props.name}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealsItemForm onAddToCart={onAddToCartHandler} />
    </li>
  );
};

export default MealsItem;
