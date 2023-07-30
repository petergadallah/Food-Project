import Card from "../UI/Card";
import myContext from "../store/context";

import styles from "./Header.module.css";
import { useContext } from "react";

const Header = (props) => {
  const x = useContext(myContext);
  const showCart = () => {
    props.showCart();
  };
  const totalAmount = x.orders.items.reduce(function (a, b) {
    return a + Number(b.amount);
  }, 0);
  return (
    <Card className={styles.header}>
      <div className={styles.title}>ReactMeals</div>
      <button onClick={showCart}>
        <span>
          <i
            className="fa-solid fa-cart-shopping"
            style={{ color: "#ffffff" }}
          ></i>
        </span>
        <span>Your Cart</span>
        <span>{totalAmount}</span>
      </button>
    </Card>
  );
};
export default Header;
