
import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string | string[];
  sale: boolean;
}

const ProductCard = ({ id, img, name, price, sale }: IProduct) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getRating = () => {
    const randomNumber = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const rating = randomNumber(0, 5);
    return (
      <div className="flex justify-center text-accent pt-4 pb-2">
        {Array.from({ length: 5 }, (_, index) => (
          index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
        ))}
      </div>
    );
  };

  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation();
    const payload = {
      id,
      name,
      img,
      price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };

  return (
    <div className="group cursor-pointer" onClick={() => router.push(`/details/${id}`)}>
      <div className="relative">
        <Image className="w-full" width={1000} height={1142} src={img} alt={name} />
        {sale && (
          <div className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4">
            SALE!
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
          <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
              <AiOutlineHeart />
            </div>
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center" onClick={addProductToCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {getRating()}
      <h2 className="font-medium pb-3 hover:text-accent">{name}</h2>
      <p className="text-gray-600 font-light">${new Intl.NumberFormat().format(price)}.00</p>
    </div>
  );
};

export default ProductCard;
