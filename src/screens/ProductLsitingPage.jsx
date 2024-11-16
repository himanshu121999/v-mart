import { IconSortDescending } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";

const ProductLsitingPage = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("Default");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = useCallback(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json?.products);
        setFilteredProducts(json?.products);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const newFiltered = products.filter((product) =>
      product?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );

    setFilteredProducts(newFiltered);
  }, [searchTerm, products]);

  const sortOptions = ["Default", "Price low to high", "Price high to low"];

  return (
    <div className="flex flex-col gap-4 w-full md:w-[80%] h-full">
      {/* Search Box */}
      <div className="flex items-center justify-between gap-2">
        <div className="w-[500px] max-md:w-full">
          <SearchBox
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>

        <div className="w-[200px] max-md:hidden">
          <Dropdown
            value={sortBy}
            onChange={(newValue) => setSortBy(newValue)}
            options={sortOptions}
          />
        </div>

        <div className="p-2 bg-white border rounded-md shadow-md text-slate-600 md:hidden">
          <IconSortDescending size={18} />
        </div>
      </div>

      {/* Product Listing */}
      <div className="grid flex-1 grid-cols-2 gap-4 overflow-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts?.map((product) => (
          <ProductCard key={product?._id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductLsitingPage;
