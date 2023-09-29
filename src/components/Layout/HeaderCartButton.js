import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.module.css'
const HeaderCartButton=()=>{


    return(
        <button className={classes.button}>
        <span className={classes.icon}><CartIcon /> </span>
        <span className={classes.cart}>Your Cart</span>
          <span className={classes['badge']}>0</span>
        </button>
     );

}


export default HeaderCartButton;