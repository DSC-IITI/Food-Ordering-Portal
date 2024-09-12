"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FoodItem, Hotel } from "@/types/hotel";
import {
  get_cart,
  patch_cart,
  add_to_cart,
  delete_cart_item,
} from "@/helpers/api";
import { toast } from "react-hot-toast";
import Link from "next/link";

type CartItem = {
  id: number;
  food_item: FoodItem;
  quantity: number;
};

export const RedBox: React.FC = () => (
  <span
    style={{
      display: "inline-block",
      width: "10px",
      height: "10px",
      backgroundColor: "red",
      marginRight: "5px",
    }}
  ></span>
);

export const GreenBox: React.FC = () => (
  <span
    style={{
      display: "inline-block",
      width: "10px",
      height: "10px",
      backgroundColor: "green",
      marginRight: "5px",
    }}
  ></span>
);

export default function FoodDeliveryPage({
  hotelDetails,
}: {
  hotelDetails: Hotel;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const foodItems = hotelDetails.food_items;

  useEffect(() => {
    async function fetchCart() {
      const cartData = await get_cart();
      setCartItems(cartData.items);
    }
    fetchCart();
  }, []);

  const addToCart = async (item: FoodItem) => {
    try {
      await add_to_cart({ food_item_id: item.id.toString() });
      const cartData = await get_cart();
      setCartItems(cartData.items);
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  const removeFromCart = async (cart_item_id: string) => {
    try {
      await delete_cart_item(cart_item_id);
      const cartData = await get_cart();
      setCartItems(cartData.items);
    } catch (error) {
      toast.error("Failed remove item from cart");
    }
  };

  const updateQuantity = async (id: number, delta: number) => {
    const existingItem = cartItems.find((item) => item.food_item.id === id);
    if (existingItem) {
      const newQuantity = existingItem.quantity + delta;
      if (newQuantity > 0) {
        await patch_cart({ quantity: newQuantity }, existingItem.id.toString());
      } else {
        await delete_cart_item(existingItem.id.toString());
      }
      const cartData = await get_cart();
      setCartItems(cartData.items);
    }
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.food_item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 relative min-h-screen bg-black text-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-orange-400">
          {hotelDetails.name}
        </h1>
        <p className="text-gray-300">
          {hotelDetails.address} | Starting at Rs.
          {hotelDetails.minPrice.toFixed(2)}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-colors bg-gray-800"
          >
            <div className="relative h-48 bg-gray-700">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-300">
                {item.name} {item.nonVeg && <RedBox />}{" "}
                {item.veg && <GreenBox />}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-semibold text-blue-300">
                ${item.price.toFixed(2)}
              </span>
              <Button
                onClick={() => addToCart(item)}
                className="bg-orange-500 hover:border-orange-700 text-white"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Button
        className="fixed bottom-8 right-8 rounded-full p-8 bg-orange-500 hover:bg-orange-600 text-white"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart className="h-6 w-6" />
        <span className="sr-only">Open cart</span>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </Button>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-gray-800 w-full max-w-md p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-400">Your Cart</h2>
              <Button variant="ghost" onClick={() => setIsCartOpen(false)}>
                <X className="h-6 w-6 text-gray-300" />
                <span className="sr-only">Close cart</span>
              </Button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-gray-300">Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex justify-between items-center mb-4 bg-gray-700 p-4 rounded-lg"
                  >
                    <div className="absolute top-1 right-1">
                      <X
                        className="h-4 w-4 text-gray-400 cursor-pointer"
                        onClick={() => removeFromCart(item.id.toString())}
                      />
                    </div>
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 mr-4">
                        <Image
                          src={item.food_item.image}
                          alt={item.food_item.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-300">
                          {item.food_item.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          ${item.food_item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.food_item.id, -1)}
                        className="text-gray-300 border-gray-600"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 font-semibold text-gray-300">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.food_item.id, 1)}
                        className="text-gray-300 border-gray-600"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-gray-300">
                      Total:
                    </span>
                    <span className="font-bold text-lg text-blue-300">
                      ${getTotalPrice()}
                    </span>
                  </div>
                  <Link href="/payment">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      size="lg"
                    >
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
