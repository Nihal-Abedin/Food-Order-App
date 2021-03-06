import React, { useState } from "react";
import CartProvider from "./store/cart-Provider"
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartHandeler = () => {
    setCartIsShown(!cartIsShown);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartHandeler} />}
      <Header onHandleCart={cartHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
