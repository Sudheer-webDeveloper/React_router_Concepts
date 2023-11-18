import React from "react";
import { useState, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

const Container = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }, [setData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
       <div className="main-container">
      {data.map((date) => {
        const { id, title, price, category, description, image } = date;

        return (
          <div key={id} className="container">
             <Link to={`/container/${id}`}>
              <div className="iamgeContainer">
                <img src={image} alt={title} />
              </div>
              <div className="second">
                <h5>{title}</h5>
                <h2> ${price}</h2>
              </div>
              <div className="third">
                <button>Try It</button>
              </div>
           </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Container;
