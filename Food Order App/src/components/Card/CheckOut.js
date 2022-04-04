import { useRef, useState } from 'react';
import classes from './CheckOut.module.css';

const Checkout = (props) => {
  const enteredName = useRef();
  const enteredStreet = useRef();
  const enteredPostal = useRef();
  const enteredCity = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });
  const isEmpty = (value) => value.trim() === '';
  const isFiveChrs = (value) => value.trim().length === 5;
  const confirmHandler = (event) => {
    event.preventDefault();

    const nameInput = enteredName.current.value;
    const addressInput = enteredStreet.current.value;
    const postalInput = enteredPostal.current.value;
    const cityInput = enteredCity.current.value;

    const nameIsValid = !isEmpty(nameInput);
    const addressIsValid = !isEmpty(addressInput);
    const cityIsValid = !isEmpty(cityInput);
    const postalIsValid = isFiveChrs(postalInput);

    setFormInputsValidity({
      name: nameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      postalCode: postalIsValid,
    });
    const formIsValid =
      nameIsValid && addressIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: nameInput,
      address: addressInput,
      city: cityInput,
      postalCode: postalInput,
    });
  };

  const addInvalidClass = (input) => {
    if (input) {
      return `${classes.control} ${classes.invalid}`;
    } else {
      return `${classes.control}`;
    }
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={addInvalidClass(!formInputsValidity.name)}>
        <label htmlFor='name'>Your Name</label>
        <input ref={enteredName} type='text' id='name' />
        {!formInputsValidity.name && <p>Please enter valid name!</p>}
      </div>
      <div className={addInvalidClass(!formInputsValidity.address)}>
        <label htmlFor='street'>Street</label>
        <input ref={enteredStreet} type='text' id='street' />
        {!formInputsValidity.address && <p>Please enter valid address!</p>}
      </div>
      <div className={addInvalidClass(!formInputsValidity.postalCode)}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={enteredPostal} type='text' id='postal' />
        {!formInputsValidity.postalCode && (
          <p>Postal must not be less than 5 char</p>
        )}
      </div>
      <div className={addInvalidClass(!formInputsValidity.city)}>
        <label htmlFor='city'>City</label>
        <input ref={enteredCity} type='text' id='city' />
        {!formInputsValidity.city && <p>Please enter valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
