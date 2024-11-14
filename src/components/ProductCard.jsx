import { IconHeart, IconShoppingCartPlus, IconStar } from "@tabler/icons-react";
import React from "react";

const ProductCard = ({
  productData: { title, category, images, rating, id, price },
}) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-white border rounded-md shadow h-fit">
      <div className="flex justify-center">
        <img src={images?.[0]} alt={title} className="size-[150px]" />
      </div>

      <div className="capitalize" > {category} </div>

      <div title={title} className="text-gray-600 truncate">
        {title}
      </div>

      <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 rounded-full w-fit text-slate-700">
        <IconStar size={12} /> {rating}
      </span>

      <div className="flex items-center justify-between">
        <span className="font-medium text-slte-700"> ${price} </span>
        <div className="flex items-center gap-2">
          <IconHeart className="text-gray-500" />
          <IconShoppingCartPlus className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
