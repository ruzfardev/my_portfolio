import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
  const ctxData = useContext(CartContext);
  const price = `$${props.mealPrice.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    ctxData.addItem({
      id: props.mealID,
      name: props.mealName,
      amount: amount,
      price: props.mealPrice,
    });
  };
  return (
    <li className={classes.meal} key={props.mealID}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
