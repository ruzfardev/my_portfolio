import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://food-order-app-8c074-default-rtdb.firebaseio.com/meals.json'
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data ${response.status}`);
        }
        const data = await response.json();

        let loadedMeals = [];
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(error.message);
      }
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (hasError && !isLoading) {
    return (
      <section className={classes.error}>
        <p>{hasError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      mealID={meal.id}
      mealName={meal.name}
      mealDescription={meal.description}
      mealPrice={meal.price}
    />
  ));
  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
