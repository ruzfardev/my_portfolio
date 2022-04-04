import { useRef, useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 8
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          type: 'number',
          id: 'amount',
          min: '1',
          max: '8',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-8)</p>}
    </form>
  );
};
export default MealItemForm;
