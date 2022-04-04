import React from 'react';
import Showcase from './Showcase';
import classes from './Header.module.css';
import img from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <Showcase>
        <img src={img} alt='React Meals showcase' />
      </Showcase>
    </React.Fragment>
  );
};

export default Header;
