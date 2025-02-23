import React, { useCallback, useEffect, useMemo, useState } from "react";

import "./pagination.css";

const Pagination = () => {
  const [data, setdata] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pageSize = 10;

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      const json = await res.json();
      if (json) {
        setdata(json.products);
      }
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getData();

    return () => {};
  }, [getData]);

  //   const totalProducts = data.length;
  //   const noOfPages = Math.ceil(totalProducts / pageSize);
  //   const start = currentpage * pageSize;
  //   const end = start + pageSize;

  // optimization
  const totalProducts = useMemo(() => data.length, [data]);
  const noOfPages = useMemo(
    () => Math.ceil(totalProducts / pageSize),
    [totalProducts, pageSize]
  );
  const start = useMemo(() => currentpage * pageSize, [currentpage, pageSize]);
  const end = useMemo(() => start + pageSize, [start, pageSize]);

  //   const changeCurrentPage = (n) => {
  //     setCurrentpage(n);
  //   };

  //   const handleNextPage = () => {
  //     if (currentpage < noOfPages - 1) {
  //       setCurrentpage(currentpage + 1);
  //     }
  //   };

  //   const handlePrevPage = () => {
  //     if (currentpage > 0) {
  //       setCurrentpage(currentpage - 1);
  //     }
  //   };

  // optimization

  const changeCurrentPage = useCallback((n) => {
    setCurrentpage(n);
  }, []);

  const handleNextPage = useCallback(() => {
    if (currentpage < noOfPages - 1) {
      setCurrentpage((prev) => prev + 1);
    }
  }, [currentpage, noOfPages]);

  const handlePrevPage = useCallback(() => {
    if (currentpage > 0) {
      setCurrentpage((prev) => prev - 1);
    }
  }, [currentpage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data.</div>;
  return (
    <div className="container">
      <div>Pagination</div>
      <div className="pagination-container">
        <button onClick={handlePrevPage} disabled={currentpage <= 0}>
          Prev
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <span
            className={currentpage === n ? "active" : ""}
            onClick={() => changeCurrentPage(n)}
          >
            {n + 1}
          </span>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentpage === noOfPages - 1}
        >
          Next
        </button>
      </div>
      <div className="product-container">
        {data &&
          data.slice(start, end).map((item) => (
            <div className="card">
              <div>
                <img src={item?.images} alt="fake image" />
              </div>
              <div>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
