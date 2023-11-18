import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <nav>
      <NavLink
        to="."
        end
        className={({ isActive }) => (isActive ? "main-link" : "normal-link")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="review"
        end
        className={({ isActive }) => (isActive ? "main-link" : "normal-link")}
      >
        Reviews
      </NavLink>
      <NavLink
        to="income"
        end
        className={({ isActive }) => (isActive ? "main-link" : "normal-link")}
      >
        Income
      </NavLink>
      <NavLink
        to="products"
        end
        className={({ isActive }) => (isActive ? "main-link" : "normal-link")}
      >
        Products
      </NavLink>

      <br />
      <br />
      <br />
      <Outlet />
    </nav>
  );
};

export default HostLayout;
