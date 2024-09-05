"use client";
import React, { useEffect } from "react";
import { HotelCard } from "@/components/cards/HotelCard";
import { getHotelList } from "@/helpers/api";
import { HotelListParams } from "@/components/cards/HotelCard";

function Home() {
  const [hotelList, setHotelList] = React.useState<HotelListParams[]>([]);

  React.useEffect(() => {
    const fetchHotelList = async () => {
      const list: HotelListParams[] = await getHotelList();
      setHotelList(list);
    };

    fetchHotelList();
  }, []);

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
