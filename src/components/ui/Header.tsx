import { Link, NavLink } from "react-router";



export function Header() {
     return(
        <div className="flex items-center gap-120 pl-10 py-4">
            <h3 className="font-bold text-xl tracking-wide">
                <Link to="/">CINEVAULT</Link>
            </h3>
            <nav className="flex items-center justify-center gap-18 text-lg text-gray-400 font-medium">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/">Favourites</NavLink>
                <NavLink to="/">WatchList</NavLink>
            </nav>
        </div>
     )
}