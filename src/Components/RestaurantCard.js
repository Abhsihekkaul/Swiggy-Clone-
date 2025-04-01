
import React from 'react';
import { IMG_CDN_LINK } from '../Constant';

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3
  } = restaurant?.info || {};

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 m-4 w-64 bg-white">
      {/* Image container with discount banner */}
      <div className="relative">
        <img 
          className="h-48 w-full object-cover" 
          src={IMG_CDN_LINK + cloudinaryImageId} 
          alt={name || "Restaurant"} 
        />
        {aggregatedDiscountInfoV3 && (
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-2">
            <p className="text-white font-bold">
              {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
            </p>
          </div>
        )}
      </div>
      
      {/* Restaurant info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg truncate">{name}</h3>
          {avgRating && (
            <span className="flex items-center bg-green-700 text-white px-1 rounded text-sm">
              <span className="mr-1">★</span>{avgRating}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm truncate">{cuisines?.join(', ')}</p>
        
        <div className="flex justify-between mt-3 text-sm text-gray-500">
          <p>{costForTwo}</p>
          <p>{sla?.deliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;