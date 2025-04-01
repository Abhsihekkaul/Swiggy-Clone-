import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RestaurantCard from './RestaurantCard';  // Assuming you have this component

const Body = () => {
    const [restaurant, setRestaurant] = useState([]);
    
    async function FetchRestaurantData() {
        try {
            const DataFetching = await axios("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
            if (!DataFetching) {
                throw new Error("Data not fetched!");
            }
            console.log(DataFetching);
            setRestaurant(DataFetching?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        FetchRestaurantData();
    }, []);

    console.log(restaurant);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Array.isArray(restaurant) && restaurant.length > 0 ? (
                    restaurant.map((restaurantItem, index) => (
                        <ul key={index}>
                            <RestaurantCard restaurant={restaurantItem} />
                        </ul>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No restaurants found</p>
                )}
            </div>
        </div>
    )
}

export default Body;
