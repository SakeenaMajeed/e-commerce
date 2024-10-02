import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [easypaisaNumber, setEasypaisaNumber] = useState("");
  const [jazzcashNumber, setJazzcashNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "915adfad-feb9-457b-85ff-064fcee681c7");

    const paymentData = Object.fromEntries(formData);
    const json = JSON.stringify(paymentData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Payment processed successfully via Web3Forms!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Payment failed: " + result.message,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while processing payment.",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-gray-800 p-4 sm:p-6 lg:p-8">
      <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 text-pink-600 drop-shadow-md text-center">
        Pay with Card
      </motion.h1>

      <div className="mt-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Added name attribute
              className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Payment Method
            </label>
            <select
              name="payment_method" // Added name attribute
              className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="easypaisa">EasyPaisa</option>
              <option value="jazzcash">JazzCash</option>
            </select>
          </div>

          {paymentMethod === "card" && (
            <>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="cardNumber"
                >
                  Card Information
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="card_number" // Added name attribute
                  className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="1234 1234 1234 1234"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="md:w-1/2">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="expiryDate"
                  >
                    MM / YY
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiry_date" // Added name attribute
                    className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="MM / YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                </div>
                <div className="md:w-1/2">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="cvc"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc" // Added name attribute
                    className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCVC(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="cardholderName"
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholder_name" // Added name attribute
                  className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Full name on card"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {paymentMethod === "easypaisa" && (
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="easypaisaNumber"
              >
                EasyPaisa Account Number
              </label>
              <input
                type="text"
                id="easypaisaNumber"
                name="easypaisa_number" // Added name attribute
                className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="03xx-xxxxxxx"
                value={easypaisaNumber}
                onChange={(e) => setEasypaisaNumber(e.target.value)}
                required
              />
            </div>
          )}

          {paymentMethod === "jazzcash" && (
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="jazzcashNumber"
              >
                JazzCash Account Number
              </label>
              <input
                type="text"
                id="jazzcashNumber"
                name="jazzcash_number" // Added name attribute
                className="w-full p-3 bg-gray-200 text-gray-900 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="03xx-xxxxxxx"
                value={jazzcashNumber}
                onChange={(e) => setJazzcashNumber(e.target.value)}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg mt-4 hover:bg-black transition duration-300"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
