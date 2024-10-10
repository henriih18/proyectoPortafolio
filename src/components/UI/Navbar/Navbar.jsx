import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
    return (
        <nav>
            <ul>

                <ItemNavbar text="quien soy" />
                <ItemNavbar text="mi familia" />
                <ItemNavbar text="mis estudios" />
            </ul>
            
        </nav>
    )
}
