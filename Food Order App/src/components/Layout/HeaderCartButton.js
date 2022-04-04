import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Card/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHighligted] = useState(false);
  const ctxData = useContext(CartContext);
  const { items } = ctxData;

  const numOfItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    const timer = setBtnHighligted(true);
    setTimeout(() => {
      setBtnHighligted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
