import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const url = "https://fakestoreapi.com/products";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const datas = await fetch(url);
        const response = await datas.json();
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingData();
  }, []);

  return (
    <div className="main-container">
      {data.map((date) => {
        const { id, title, price, category, description, image } = date;

        return (
          <div key={id} className="container">
            
            <NavLink to={`/host/products/${id}`}>

              {/* <Link to ={`/container/${id}`}></Link> */}
              <div className="iamgeContainer">
                <img src={image} alt={title} />
              </div>
              <div className="second">
                <h5>{title}</h5>
              </div>
              <div className="third">
                <button>Try It</button>
                <h2> ${price}</h2>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
