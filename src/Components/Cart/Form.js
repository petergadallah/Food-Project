import React, { useRef, useState } from "react";
import styles from "./Form.module.css";
const isNotEmpty = (x) => x.trim() !== "";
const isFiveChars = (x) => x.trim().length === 5;
export default function Form(props) {
  const [formInputValidaty, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameRef = useRef();
  const cityRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredcity = cityRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const validateName = isNotEmpty(enteredName);
    const validateCity = isNotEmpty(enteredcity);
    const validateStreet = isNotEmpty(enteredStreet);
    const validatePostalCode = isFiveChars(enteredPostalCode);
    setFormInputValidity({
      name: validateName,
      street: validateStreet,
      city: validateCity,
      postalCode: validatePostalCode,
    });
    const formIsValid =
      validateName && validateCity && validatePostalCode && validateStreet;
  };

  const hideCart = () => {
    props.hideCart();
  };
  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.section}>
        <label>name</label>
        <input type="text" ref={nameRef} />
        {!formInputValidaty.name && (
          <p className={styles.notes}>Please Enter A Valid Name</p>
        )}
      </div>
      <div className={styles.section}>
        <label>city</label>
        <input type="text" ref={cityRef} />
        {!formInputValidaty.city && (
          <p className={styles.notes}>This field must not be empty</p>
        )}
      </div>
      <div className={styles.section}>
        <label>street</label>
        <input type="text" ref={streetRef} />
        {!formInputValidaty.street && (
          <p className={styles.notes}>Fill this Field</p>
        )}
      </div>
      <div className={styles.section}>
        <label>postal code</label>
        <input type="text" ref={postalCodeRef} />
        {!formInputValidaty.postalCode && (
          <p className={styles.notes}>Postal Code must be 5 digits</p>
        )}
      </div>
      <button type="submit">Confirm</button>
      <button onClick={hideCart}>Cancel</button>
    </form>
  );
}
