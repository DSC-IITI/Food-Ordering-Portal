import React from "react";
import { HotelCard } from "@/components/cards/HotelCard";
import { getHotelList } from "@/lib/api";

interface HotelListParams {
  id: number;
  name: string;
  minPrice: number;
  rating: number;
  veg: boolean;
  nonVeg: boolean;
}

async function Home() {
  const hotelList: [HotelListParams] = await getHotelList();
  return (
    <>
      <div className="flex justify-center items-center">
        <h1>Welcome</h1>
      </div>
      <div className="flex gap-8 mx-8 my-8">
        {hotelList.map((hotel) => (
          <HotelCard key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </>
  );
}

export default Home;
