import React from "react";
import { HotelCard } from "@/components/cards/HotelCard";
import { getHotelList } from "@/lib/api";
import { HotelListParams } from "@/components/cards/HotelCard";

async function Home() {
  const hotelList: [HotelListParams] = await getHotelList();

  return (
    <>
      <div className="flex gap-8 mx-8 my-8 flex-wrap">
        {hotelList.map((hotel) => (
          <HotelCard key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </>
  );
}

export default Home;
