import React, { useEffect, useState } from "react";
import styles from "./Species.module.css";
import SpeciesItem from "./SpeciesItem";
import Card from "../UI/Card";
let myArray = [];
export default function Species({ items }) {
  return (
    <Card className={styles.container}>
      <ul className={styles.species}>
        {items.map((e) => (
          <SpeciesItem
            name={e.name}
            description={e.description}
            price={e.price}
            key={Math.random()}
          />
        ))}
      </ul>
    </Card>
  );
}
