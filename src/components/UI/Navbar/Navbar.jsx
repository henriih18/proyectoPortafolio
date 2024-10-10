import { ItemNavbar } from "../ItemNavbar/IteamNavbar";

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
