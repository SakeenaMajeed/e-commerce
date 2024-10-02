"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer({
  companyName = "MakeUpStore",
  description = "Discover the best makeup, skincare, and beauty products with us. Elevate your beauty game with top brands and trends!",
  year = new Date().getFullYear(),
  customerServiceLinks = [
    { label: "Contact Us", href: "#" },
    { label: "Order Status", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Shipping Information", href: "#" },
  ],
  quickLinks = [
    { label: "Makeup", href: "#" },
    { label: "Skincare", href: "#" },
    { label: "Nail & Wax", href: "#" },
  ],
  socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/sukaina.majeed.98?mibextid=ZbWKwL",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/_sakeena_majeed?igsh=cHZ4MHl3MTF4dDcz",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/sakeena-majeed-86b58732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/SakeenaMajeed",
    },
  ],
}) {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: any) => {
    e.preventDefault();
    const mailtoLink = `mailto:sakeenamajeed24@gmail.com?subject=Newsletter Signup&body=I would like to sign up for the newsletter with this email: ${email}`;
    window.location.href = mailtoLink;
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-xl font-bold mb-4">{companyName}</h2>
          <p className="text-gray-400 mb-4">{description}</p>
          <p className="text-gray-400">
            © {year} Sakeena Majeed. All rights reserved.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Customer Service</h2>
          <ul>
            {customerServiceLinks.map(({ label, href }, index) => (
              <li key={index} className="mb-2">
                <a href={href} className="text-gray-400 hover:text-pink-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            {quickLinks.map(({ label, href }, index) => (
              <li key={index} className="mb-2">
                <a href={href} className="text-gray-400 hover:text-pink-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Sign up for our Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Stay in the know with the latest beauty trends, exclusive offers,
            and insider tips from Allure Beauty.
          </p>
          <form onSubmit={handleNewsletterSignup} className="flex flex-col">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 mb-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 text-black" // Updated for black text
              required
            />
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600"
            >
              Sign up
            </button>
          </form>
          <p className="text-gray-400 mt-4">
            By completing this form, you are signing up to receive our emails
            and can unsubscribe at any time.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-center">Follow Us</h2>
        <p className="text-gray-400 mb-4 text-center">
          Stay connected with us through social platforms:
        </p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ name, icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="text-gray-400 hover:text-pink-500"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex justify-center">
          <p className="text-gray-400 text-center">
            © {year} Sakeena Majeed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
