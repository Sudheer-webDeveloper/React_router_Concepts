import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./Routes/Home";
import Layout from "./Layout";
import About from "./Routes/About";
import Container from "./Routes/Container";
import SingleProduct from "./Routes/SingleProduct";
import HostLayout from "./HostLayout";
import Dashboard from "./Routes/Dashboard";
import Reviews from "./Routes/Reviews";
import Income from "./Routes/Income";
import Products from "./Routes/Products";
import NewSingleProduct from "./Routes/NewSingleProduct";
import Pricing from "./Routes/Pricing";
import Detail from "./Routes/Detail";
import Photos from "./Routes/Photos";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="container" element={<Container />} />
            <Route path="container/:id" element={<SingleProduct />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="review" element={<Reviews />} />
              <Route path="income" element={<Income />} />
              <Route path="products" element={<Products />} />

              <Route path="products/:id" element={<NewSingleProduct />}>
                <Route path="detail" element={<Detail />}/>
                <Route path="pricing" element={<Pricing />}/>
                <Route path="photos" element={<Photos />}/>
              </Route>

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
