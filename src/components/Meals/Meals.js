import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Cart from '../Cart/Cart'
const Meals=()=>{

    return(
<Fragment>
    <MealsSummary/>
    <AvailableMeals/>
    <Cart />
</Fragment>
    );
}

export default Meals;