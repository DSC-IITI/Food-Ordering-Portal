"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HomeHeader = () => {
  return (
    <div className="relative h-[50vh] bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/homepage-bg.jpg"
          alt="Various delicious foods"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover Delicious Eats
        </h1>
        <p className="text-xl text-white mb-8">
          Find and order from the best restaurants in your area
        </p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <Input
              type="text"
              placeholder="Search for restaurants or cuisines"
              className="w-full py-3 pl-4 pr-12 rounded-full text-lg"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
