import MealsItemForm from './MealItemForm';
import classes from './MealsItem.module.css'

const MealsItem =props => {
  const price=`$${props.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div key={props.name}>
        <h3 >{props.name}</h3>
        <div className={classes.description }>{props.description}</div>
        <div className={classes.price }>{price}</div>
      </div>
      <MealsItemForm/>
    </li>
  );
};

export default MealsItem;
