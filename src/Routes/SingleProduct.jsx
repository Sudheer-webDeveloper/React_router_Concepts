import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, memo } from "react";

const SingleProduct = () => {
  const params = useParams();
  // console.log(params)  //output  Object { id: "1" }
  //  console.log(params.id)  // output 1 , if we click on first item

  const url = `https://fakestoreapi.com/products/${params.id}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchingSingle = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setData(response);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingSingle();
  }, [params.id]);

  return (
    <div>
      {data ? (
        <div key={data.id}>
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "300px", height: "400px", borderRadius: "5px" }}
          />
          <h2>{data.title}</h2>
          <h4>{data.description}</h4>
          <h3>{data.category}</h3>
          <h1> ${data.price}</h1>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default SingleProduct;
