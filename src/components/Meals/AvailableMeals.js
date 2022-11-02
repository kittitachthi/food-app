import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MENU = [
  {
    id: "m1",
    name: "Esspresso",
    description: "An intense,full-flavored espresso",
    price: 6.99,
  },
  {
    id: "m2",
    name: "Classic Chocolate",
    description:
      "Milk and bittersweet chocolate with whipped cream and chocolate sauce",
    price: 8.5,
  },
  {
    id: "m3",
    name: "Blueberry Cheesecake",
    description:
      "Rich & smooth cheesecake with cookie based, topped with sour cream and blueberry filling",
    price: 9.99,
  },
  {
    id: "m4",
    name: "Brushetta",
    description: "Tuna melt, Spinach, Ham & Cheese",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const menuList = DUMMY_MENU.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
