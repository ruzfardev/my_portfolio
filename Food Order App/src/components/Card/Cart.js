import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../Card/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import CheckOut from './CheckOut';
const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmmitting] = useState(false);
  const [didSubmit, setDidSubmmit] = useState(false);
  const ctxData = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctxData.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctxData.addItem(item);
  };
  const totalAmount = `$ ${ctxData.totalAmount.toFixed(2)}`;
  const hasItem = ctxData.items.length > 0;
  const cartItems = ctxData.items.map((item) => (
    <CartItem
      key={item.id}
      amount={item.amount}
      name={item.name}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    ></CartItem>
  ));

  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrder = async (userData) => {
    setIsSubmmitting(true);
    await fetch(
      'https://food-order-app-8c074-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: ctxData.items,
        }),
      }
    );
    setIsSubmmitting(false);
    setDidSubmmit(true);
  };

  const modalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <CheckOut onSubmit={submitOrder} onCancel={props.onHideCart} />
      )}
      {!isCheckOut && (
        <div className={classes.actions}>
          <button onClick={props.onHideCart} className={classes['button--alt']}>
            Close
          </button>
          {hasItem && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && <p>Submitting your order...🕑</p>}
      {didSubmit && !isSubmitting && (
        <React.Fragment>
          <p>Your order submitted ✅</p>
          <button onClick={props.onHideCart} className={classes.button}>
            Close
          </button>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default Cart;
