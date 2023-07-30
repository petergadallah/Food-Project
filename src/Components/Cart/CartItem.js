import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import myContext from "../store/context";

export default function CartItem(props) {
  const x = useContext(myContext);
  const increase = () => {
    x.addItem({
      name: props.name,
      price: props.price,
      amount: Number(props.amount) + 1,
    });
  };
  const decrease = () => {
    x.deleteItem({
      name: props.name,
      price: props.price,
      amount: Number(props.amount) - 1,
    });
  };
  return (
    <div className={styles.item}>
      <div className={styles.results}>
        <h3 className={styles.name}>{props.name}</h3>
        <div>
          <span className={styles.price}> ${props.price.toFixed(2)}</span>
          <span className={styles.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={styles.changeamount}>
        <button onClick={increase} className={styles.button}>
          +
        </button>
        <button onClick={decrease} className={styles.button}>
          -
        </button>
      </div>
    </div>
  );
}
