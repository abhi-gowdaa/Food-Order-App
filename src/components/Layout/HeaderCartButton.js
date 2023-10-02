import { useState } from 'react';
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.module.css'


const HeaderCartButton=(props)=>{
  const [isClicked,setClick]=useState(false)

  const btnClick=()=>{
    console.log('heloo')
    setClick(true)
   /* `props.onClick(isClicked)` is calling the `onClick` function that is passed as a prop to the
   `HeaderCartButton` component. It is passing the current value of `isClicked` as an argument to
   the `onClick` function. */
   
  
  

}


    return(
        <button className={classes.button} onClick={btnClick} >
        <span className={classes.icon}><CartIcon /> </span>
        <span className={classes.cart}>Your Cart</span>
          <span className={classes['badge']}>0</span>
        </button>
     );

}


export default HeaderCartButton;