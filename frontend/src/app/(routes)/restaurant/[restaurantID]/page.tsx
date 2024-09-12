"use client";
import FoodDeliveryPage from "@/components/FoodDeliveryPage";
import LoadingScreen from "@/components/Loader/loader";
import { getHotelDetail } from "@/helpers/api";
import { Hotel } from "@/types/hotel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Phone, DollarSign, Utensils, Coffee, Leaf, Drumstick } from 'lucide-react'
import React from "react";

const restaurantData = {
  id:1,
  name: "Azure Seafood Grill",
  address: "456 Ocean View Blvd, Seaside, SS 67890",
  minPrice: 15,
  rating: 4.8,
  // hours: "12:00 PM - 11:00 PM",
  // phone: "(555) 987-6543",
  // priceRange: "$$$",
  veg:true,
  nonVeg:true,
  food_items: [
    { id: 1, name: "Grilled Atlantic Salmon", price: 24, description: "Fresh salmon fillet with lemon butter sauce", image: "/placeholder.svg?height=100&width=100",veg: false,nonVeg:true },
    { id: 2, name: "Vegetable Risotto", price: 18, description: "Creamy arborio rice with seasonal vegetables", image: "/placeholder.svg?height=100&width=100", veg: false,nonVeg:true},
    { id: 3, name: "Seafood Paella", price: 28, description: "Spanish rice dish with assorted seafood", image: "/placeholder.svg?height=100&width=100", veg: false,nonVeg:true },
    { id: 4, name: "Blueberry Cheesecake", price: 10, description: "New York style cheesecake with blueberry compote", image: "/placeholder.svg?height=100&width=100", veg: false,nonVeg:true },
  ]
}
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

  
  return <FoodDeliveryPage hotelDetails={restaurantData} />;
}
