import { useEffect, useState } from "react";
import myContext from "./context";

const MyProvider = (props) => {
  const [orders, setOrders] = useState({
    totalPrice: 0,
    items: [],
  });
  const [cartHasItems, setCartHasItems] = useState(false);
  const addItem = (item) => {
    const myArray = orders.items;
    const theItem = orders.items.find((e) => e.name === item.name);
    const itemIndex = myArray.indexOf(theItem);
    myArray[itemIndex] = {
      ...myArray[itemIndex],
      amount: Number(myArray[itemIndex].amount) + 1,
    };
    setOrders((e) => {
      return {
        totalAmount: Number(e.totalAmount) + 1,
        totalPrice: e.totalPrice + Number(item.price),
        items: myArray,
      };
    });
    setCartHasItems(true);
  };

  const deleteItem = (item) => {
    const myArray = orders.items;
    const theItem = orders.items.find((e) => e.name === item.name);
    const itemIndex = myArray.indexOf(theItem);
    myArray[itemIndex] = {
      ...myArray[itemIndex],
      amount: Number(myArray[itemIndex].amount) - 1,
    };
    setOrders((e) => {
      return {
        totalAmount: Number(e.totalAmount) - 1,
        totalPrice: e.totalPrice - Number(item.price),
        items: myArray,
      };
    });
    if (orders.items[0].amount === 0) {
      setCartHasItems(false);
    }
  };

  const addToOrders = (newOrder) => {
    if (orders.items.some((e) => e.name === newOrder.name)) {
      const ordersWithoutRepeatedItem = orders.items.filter(
        (e) => e.name !== newOrder.name
      );
      let repeatedItem = orders.items.find((e) => e.name === newOrder.name);
      repeatedItem = {
        ...repeatedItem,
        amount: Number(newOrder.amount) + Number(repeatedItem.amount),
      };
      setOrders((x) => {
        return {
          // totalAmount: Number(x.totalAmount) + Number(newOrder.amount),
          totalPrice: x.totalPrice + newOrder.price * newOrder.amount,
          items: [...ordersWithoutRepeatedItem, repeatedItem],
        };
      });
    } else {
      setOrders((x) => {
        return {
          // totalAmount: Number(x.totalAmount) + Number(newOrder.amount),

          totalPrice: x.totalPrice + newOrder.price * newOrder.amount,
          items: [
            ...x.items,
            {
              name: newOrder.name,
              price: newOrder.price,
              amount: newOrder.amount,
              key: newOrder.key,
            },
          ],
        };
      });
    }
    setCartHasItems(true);
  };

  return (
    <myContext.Provider
      value={{
        orders,
        addToOrders,
        addItem,
        deleteItem,
        cartHasItems,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
export default MyProvider;
