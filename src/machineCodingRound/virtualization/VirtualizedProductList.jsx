import React, { useEffect, useRef, useState } from "react";
import "./VirtualizedProductList.css";

const VirtualizedProductList = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  // Height for each product card. Adjust if needed.
  const itemHeight = 220;
  // Number of extra items to render above and below the viewport to reduce flickering.
  const overscanCount = 3;
  // Height of the visible container.
  const containerHeight = 600;

  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 });

  // Fetch data from API
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      const data = await res.json();
      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Calculate the number of items visible in the container
  const itemsPerScreen = Math.ceil(containerHeight / itemHeight);

  // Update the visible range based on the scroll position
  const updateVisibleRange = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscanCount
      );
      const endIndex = Math.min(
        products.length,
        Math.floor((scrollTop + containerHeight) / itemHeight) + overscanCount
      );
      setVisibleRange({ start: startIndex, end: endIndex });
    }
  };

  useEffect(() => {
    updateVisibleRange(); // initialize visible range
  }, [products]);

  return (
    <div className="container">
      <h2>Virtualized Product List</h2>
      {/* Outer container with fixed height and scroll */}
      <div
        className="virtualized-container"
        ref={containerRef}
        style={{
          height: containerHeight,
          overflowY: "auto",
          position: "relative",
        }}
        onScroll={updateVisibleRange}
      >
        {/* This spacer sets the total height so the scroll works correctly */}
        <div
          style={{ height: products.length * itemHeight, position: "relative" }}
        >
          {/* Render only the visible items */}
          {products
            .slice(visibleRange.start, visibleRange.end)
            .map((product, index) => {
              // Calculate the absolute position for each item.
              const itemIndex = visibleRange.start + index;
              const top = itemIndex * itemHeight;
              return (
                <div
                  key={product.id}
                  className="card"
                  style={{
                    position: "absolute",
                    top: top,
                    left: 0,
                    right: 0,
                    height: itemHeight,
                  }}
                >
                  <div className="card-image">
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                  <div className="card-title">
                    <span>{product.title}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedProductList;
