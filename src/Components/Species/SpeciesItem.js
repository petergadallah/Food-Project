import React, { useContext, useState } from "react";
import styles from "./SpeciesItem.module.css";
import myContext from "../store/context";

export default function SpeciesItem(props) {
  let [amount, setAmount] = useState(0);
  const changeHandler = (e) => {
    setAmount(e.target.value);
  };
  const x = useContext(myContext);
  const addHandler = () => {
    x.addToOrders({
      name: props.name,
      price: props.price,
      amount,
      totalamount: amount,
    });
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.details}>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>${props.price}</div>
        </div>
        <div className={styles.choose}>
          <div className={styles.enterinput}>
            <label htmlFor="myInput"></label>
            Amount
            <input
              type="number"
              min="0"
              onChange={changeHandler}
              id="myInput"
            />
          </div>
          <button onClick={addHandler} disabled={amount < 1}>
            + Add
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
