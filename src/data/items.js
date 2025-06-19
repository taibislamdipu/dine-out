import Chicken from "../assets/chicken.svg";
import Hamburger from "../assets/hamburger.svg";
import Pizza from "../assets/pizza.svg";

const items = [
  {
    id: crypto.randomUUID(),
    image: Hamburger,
    name: "Burger",
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    image: Pizza,
    name: "Pizza",
    price: 200,
  },
  {
    id: crypto.randomUUID(),
    image: Chicken,
    name: "Chicken",
    price: 300,
  },
];

export default items;
