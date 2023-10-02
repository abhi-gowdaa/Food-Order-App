// import classes from "./Cart.module.css";
// const Cart = () => {
//   const cartItem = (
//     <ul className={classes["cart-items"]}>
//       {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <section className={classes.cart} data-tilt data-tilt-scale="0.95" data-tilt-startY="40"> 
//       {cartItem}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>33.66</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes['button--alt']}>Close</button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </section>
//   );
// };

// export default Cart;

import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import classes from './Cart.module.css';

const Cart = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;

    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        scale: 0.95,
        startY: 0,
      });
    }

    return () => {
      if (tiltElement) {
        tiltElement.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={`Tilt ${classes.cart}`}>
      <ul className={classes['cart-items']}>
        {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.66</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
