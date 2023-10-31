import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React,{useContext} from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";


const Cart = (props) => {

const cartCtx=useContext(CartContext)

const totalAmount= `$${cartCtx.totalAmount}`;
const hasItems= cartCtx.items.length>0;

const cartItemRemoveHandler=(id)=> {
cartCtx.removeItem(...id,id)
  
};

const cartItemAddHandler =(item)=>{

  cartCtx.addItem({ ...item, amount: 1 });
};



  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} 
        name={item.name}
         amount={item.amount} 
         price={item.price}  
         onRemove={cartItemRemoveHandler.bind(null,item.id)} 
          onAdd={cartItemAddHandler.bind(null,item)}/>
      ))}
    </ul>
  );

 
  return (
    <Modal onCloseCart={props.onCloseCart}>  
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        {hasItems &&  <button className={classes.button} onClick={console.log('Ordering')}>Order</button>
      }
      </div>
    
    </Modal>  
  );
};

export default Cart;

// import React, { useEffect, useRef } from 'react';
// import VanillaTilt from 'vanilla-tilt';
// import classes from './Cart.module.css';

// const Cart = () => {
//   const tiltRef = useRef(null);

//   useEffect(() => {
//     const tiltElement = tiltRef.current;

//     if (tiltElement) {
//       VanillaTilt.init(tiltElement, {
//         scale: 0.95,
//         startY: 0,
//       });
//     }

//     return () => {
//       if (tiltElement) {
//         tiltElement.vanillaTilt.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div ref={tiltRef} className={`Tilt ${classes.cart}`}>
//       <ul className={classes['cart-items']}>
//         {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>33.66</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes['button--alt']}>Close</button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
