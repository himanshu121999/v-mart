import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import Dropdown from "../components/Dropdown";

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

  console.log(products);

  return (
    <div className="flex flex-col gap-4 w-[80%] h-full">
      {/* Search Box */}
      <div className="flex justify-between">
        <SearchBox
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <div className="w-[250px]">
          <Dropdown
            value={sortBy}
            onChange={(newValue) => setSortBy(newValue)}
            options={sortOptions}
          />
        </div>
      </div>

      {/* Product Listing */}
      <div className="grid flex-1 grid-cols-5 gap-4 overflow-auto">
        {filteredProducts?.map((product) => (
          <ProductCard key={product?._id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductLsitingPage;
