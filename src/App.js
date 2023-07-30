import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Species from "./Components/Species/Species";
import Cart from "./Components/Cart/Cart";
import MyProvider from "./Components/store/ContextProvider";
const items = [
  { name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
  { name: "Schnitzel", description: "A german specialty!", price: 16.5 },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  { name: "Green Bowl", description: "Healthy...and green...", price: 18.99 },
];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };
  return (
    <MyProvider>
      <div className="app">
        <Header showCart={showCart} />
        <Intro />
        <Species items={items} />
        {cartIsShown && <Cart items={items} hideCart={hideCart} />}
      </div>
    </MyProvider>
  );
}

export default App;
