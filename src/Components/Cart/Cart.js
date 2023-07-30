import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import myContext from "../store/context";
import Form from "./Form";
export default function Cart(props) {
  const [formIsShown, setFormIsShown] = useState(false);
  const x = useContext(myContext);
  const hideCart = () => {
    props.hideCart();
  };
  const showForm = () => {
    setFormIsShown(true);
  };
  console.log(x.cartHasItems);
  const twoButtons = (
    <>
      <button className={styles.button} onClick={hideCart}>
        Close
      </button>

      {x.cartHasItems && (
        <button className={styles.button} onClick={showForm}>
          Order
        </button>
      )}
    </>
  );
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.cart}>
        {x.orders.items.map(
          (e) =>
            e.amount > 0 && (
              <CartItem
                name={e.name}
                price={e.price}
                amount={e.amount}
                key={Math.random()}
              />
            )
        )}

        <div className={styles.total}>
          <div>Total Amount</div>
          <div>${x.orders.totalPrice.toFixed(2)}</div>
        </div>

        {!formIsShown && twoButtons}
        <div id={styles.clear}></div>
        {formIsShown && <Form hideCart={hideCart} />}
      </div>
    </>
  );
}
