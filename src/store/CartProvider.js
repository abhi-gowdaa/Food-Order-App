import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  if (action.type === "ADD") {
    const updatesTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    
    // to check if the item  already exist
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,  
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatesTotalAmount,
    };
  }


if(action.type==='REMOVE')
{
  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.id
  );

  const existingCartItem = state.items[existingCartItemIndex];
  const updatedTotalAmount=state.totalAmount-existingCartItem.price;

 
return{
  items:existingCartItem,
  totalAmount:updatedTotalAmount
}

}

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, disPatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    disPatchAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    disPatchAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
