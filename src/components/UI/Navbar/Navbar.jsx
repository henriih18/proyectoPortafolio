import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <a href="#">
          <ItemNavbar text="Quien soy" />
        </a>

        <a href="#">
          <ItemNavbar text="Mi familia" />
        </a>

        <a href="#">
          <ItemNavbar text="Mis estudios" />
        </a>
      </ul>
    </nav>
  );
};
