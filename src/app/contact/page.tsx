"use client";

import React, { useState } from "react"; // Import useState
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Append access key to form data
    const dataToSend = {
      ...formData,
      access_key: "915adfad-feb9-457b-85ff-064fcee681c7",
    };

    const json = JSON.stringify(dataToSend);

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
          text: "Message sent successfully!",
          icon: "success",
        });
        // Clear form data after successful submission
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Message sending failed.",
        icon: "error",
      });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact <span className="text-pink-600">Us</span>
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name} // Bind input value to state
            onChange={handleChange} // Handle input change
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email} // Bind input value to state
            onChange={handleChange} // Handle input change
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message} // Bind input value to state
            onChange={handleChange} // Handle input change
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-black transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
