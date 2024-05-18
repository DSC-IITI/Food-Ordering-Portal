import React from "react";

const RestaurantPage = ({ params }: { params: { restaurantID: string } }) => {
  return <div>Restaurant ID: {params.restaurantID}</div>;
};

export default RestaurantPage;
