import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const NewSingleProduct = () => {
  const params = useParams();
  const url = `https://fakestoreapi.com/products/${params.id}`;
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchingSingle = async () => {
      try {
        const datas = await fetch(url);
        const response = await datas.json();
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
    <div className="singleitem">
      <NavLink to=".." relative="path">
        Back to host page
      </NavLink>
      {/* but this takes to the one level up but based on path  here it goes to /products route path// they will one level up in our routing stucture */}

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
      <br />
      <br />
      <br />

      <nav>
        <NavLink
          to="detail"
          end
          className={({ isActive }) => (isActive ? "main-link" : "normal-link")}
        >
          Detail
        </NavLink>

        <NavLink
          to="pricing"
          className={({ isActive }) => (isActive ? "main-link" : "normal-link")}
        >
          Pricing
        </NavLink>

        <NavLink
          to="photos"
          className={({ isActive }) => (isActive ? "main-link" : "normal-link")}
        >
          Photos
        </NavLink>

        <Outlet context={{ data: data }} />

        {/* <Outlet context={{data}}/>   */}
      </nav>
    </div>
  );
};

export default NewSingleProduct;
