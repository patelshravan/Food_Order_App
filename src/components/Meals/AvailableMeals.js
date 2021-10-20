import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pav Bhaji",
    description: "Finest bhaji made from veggies",
    price: 50.0,
  },
  {
    id: "m2",
    name: "Aaloo Parantha",
    description: "An Indian specialty!",
    price: 20.0,
  },
  {
    id: "m3",
    name: "Vada Paav",
    description: "Indian, raw, tasty",
    price: 15.0,
  },
  {
    id: "m4",
    name: "Chana Chaat",
    description: "Healthy...and nutritious...",
    price: 30.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
