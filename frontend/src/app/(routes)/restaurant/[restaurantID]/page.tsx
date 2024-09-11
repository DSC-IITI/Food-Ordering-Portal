"use client";
import FoodDeliveryPage from "@/components/FoodDeliveryPage";
import LoadingScreen from "@/components/Loader/loader";
import { getHotelDetail } from "@/helpers/api";
import { Hotel } from "@/types/hotel";
import React from "react";

export default function Home({ params }: { params: { restaurantID: string } }) {
  const [hotelDetails, setHotelDetails] = React.useState<Hotel | null>(null);

  React.useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const details = await getHotelDetail(params.restaurantID);
        setHotelDetails(details);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchHotelDetails();
  }, [params.restaurantID]);

  if (!hotelDetails) {
    return <LoadingScreen />;
  }
  return <FoodDeliveryPage hotelDetails={hotelDetails} />;
}
