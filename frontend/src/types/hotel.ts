export interface HotelListParams {
    id: number;
    name: string;
    minPrice: number;
    rating: number;
    veg: boolean;
    nonVeg: boolean;
    hotel_image: string;
    description? :string;
  }

  export interface FoodItem {
    id: number;
    name: string;
    price: number;
    veg: boolean;
    nonVeg: boolean;
    image: string;
    description?: string;
  }
  
  export interface Hotel {
    id: number;
    name: string;
    address: string;
    minPrice: number;
    rating: number;
    veg: boolean;
    nonVeg: boolean;
    food_items: FoodItem[];
  }
