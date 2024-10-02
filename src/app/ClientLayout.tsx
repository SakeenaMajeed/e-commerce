"use client";

import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Provider store={store}>
      <NavBar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      {children}
    </Provider>
  );
};

export default ClientLayout;
