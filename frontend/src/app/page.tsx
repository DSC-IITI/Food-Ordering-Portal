"use client";
import Link from "next/link";
import HomeHeader from "@/components/header/HomeHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";
import { HotelListParams } from "@/types/hotel";
import { getHotelList } from "@/helpers/api";
import LoadingScreen from "@/components/Loader/loader";

export default function Home() {
  const [restaurants, setrestaurants] = React.useState<
    HotelListParams[] | null
  >(null);

  React.useEffect(() => {
    const fetchHotelList = async () => {
      const list: HotelListParams[] = await getHotelList();
      setrestaurants(list);
    };

    fetchHotelList();
  }, []);

  if (!restaurants) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <HomeHeader />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Popular Restaurants</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants &&
            restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden">
                <img
                  src={restaurant.hotel_image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{restaurant.name}</CardTitle>
                  <CardDescription>{restaurant.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-2">{restaurant.rating}</span>
                    </div>
                    <div className="text-green-600 font-semibold">
                      From Rs. {restaurant.minPrice.toFixed(2)}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/restaurant/${restaurant.id}`}
                    className="w-full"
                  >
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Buy Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
      </main>
    </div>
  );
}
