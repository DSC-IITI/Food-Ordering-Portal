import React from "react";
import Image from "next/image";
import foodImg from "@/assets/pbm.jpg";
import Link from "next/link";

interface HotelListParams {
  id: number;
  name: string;
  minPrice: number;
  rating: number;
  veg: boolean;
  nonVeg: boolean;
}

function RatingStar(params: { yellow: boolean }) {
  return (
    <svg
      className={
        params.yellow
          ? "w-4 h-4 text-yellow-300"
          : "w-4 h-4 text-gray-200 dark:text-gray-600"
      }
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}

export const HotelCard = (params: { hotel: HotelListParams }) => {
  const Rating = Array.from({ length: 5 }, (_, index) => {
    if (index < params.hotel.rating) {
      return <RatingStar key={index} yellow={true} />;
    } else {
      return <RatingStar key={index} yellow={false} />;
    }
  });

  return (
    <>
      <Link href={`/restaurant/${params.hotel.id}`}>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className="overflow-hidden">
            <Image src={foodImg} alt="Food Image" />
          </div>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {params.hotel.name}
            </h5>
            <div className="flex justify-between items-center mt-2.5 mb-5">
              <div className="flex flex-row gap-1">
                {params.hotel.veg && (
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="10" y="10" width="100" height="100" fill="green" />
                  </svg>
                )}

                {params.hotel.nonVeg && (
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="10" y="10" width="100" height="100" fill="red" />
                  </svg>
                )}
              </div>
              <div className="flex flex-row">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {Rating}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {params.hotel.rating}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Starting from ₹ {params.hotel.minPrice}
              </span>
              <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <div className="flex flex-row">
                  View More
                  <svg
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
