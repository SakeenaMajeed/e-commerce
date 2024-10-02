"use client";

import { useAppSelector } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Payment from "./Payment";

const Cart = ({ setShowCart }: { setShowCart: (show: boolean) => void }) => {
  const products = useAppSelector((state) => state.cartReducer);
  const router = useRouter();
  const [showPayment, setShowPayment] = useState(false);

  const getTotal = () => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        <div className="mt-6 space-y-2">
          {products.length > 0 ? (
            products.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>${getTotal().toFixed(2)}</p>
        </div>

        {/* Wrap the checkout button and payment form */}
        <div className={`flex ${showPayment ? "flex-col-reverse" : "flex-col"} space-y-4`}>
          <button
            className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent"
            onClick={handleCheckout}
          >
            CheckOut
          </button>
          {showPayment && <Payment />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
