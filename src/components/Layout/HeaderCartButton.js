import React,{useContext} from 'react';
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.module.css'

import CartContext from '../../store/Cart-context';


 

const HeaderCartButton=(props)=>{

const cartCtx=useContext(CartContext)

const noOfTotalItem=cartCtx.items.reduce((curNumber,item)=>{

  return curNumber+item.amount;
},0)

// above reduce method reduces the repeated item into single , like 3 icecreem and 2 hot dog 
// is still 1 icreem ob and 1 hot dog , 
//curnumbwe is a func tht calls , item is a item to be reduced


    return(
        <button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}><CartIcon /> </span>
        <span className={classes.cart}>Your Cart</span>
          <span className={classes['badge']}>{noOfTotalItem}</span>
        </button>
     );

}


export default HeaderCartButton;